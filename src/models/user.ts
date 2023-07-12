import services from "@/services/auth";

const { login } = services.AuthController;

const initialState: Auth.UserState = {
	isLogin: false,
	isLoading: true,
	user: undefined,
};

export default {
	namespace: "user",

	state: initialState,

	reducers: {
		loginSuccess(
			state: Auth.UserState,
			action: { payload: Auth.UserInfo }
		) {
			const organizationId: number = Number(
				action.payload.organization.replace(/[^0-9]/gi, "")
			);
			return {
				...state,
				isLogin: true,
				isLoading: false,
				user: { ...action.payload, organizationId },
			};
		},

		logout(state: Auth.UserState) {
			sessionStorage.removeItem("user");
			return {
				...state,
				isLogin: false,
				isLoading: false,
				user: undefined,
			};
		},
	},

	effects: {
		*doLogin(
			{
				payload,
				callback,
			}: {
				payload: {
					loginParams: Auth.User_Login_Request;
					resolve: any;
					reject: any;
				};
				callback: (isComplete: boolean, message?: string) => void;
			},
			{
				put,
				call,
			}: {
				put: any;
				call: any;
			}
		) {
			const { loginParams, resolve } = payload;
			const { data, success } = yield call(login, loginParams);
			if (data && success) {
				const userInfo = data as Auth.User_Login_Response;
				yield sessionStorage.setItem("user", JSON.stringify(userInfo));
				yield put({
					type: "loginSuccess",
					payload: userInfo as Auth.UserInfo,
				});
				if (callback) callback(true, "Login successfully");
				resolve(true);
			} else {
				if (callback) callback(false, "Login failed");
				resolve(false);
			}
		},

		// *doRegister({ payload, callback }, { put, call }) {},
	},
};
