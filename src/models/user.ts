import services from "@/services/auth";

const { login } = services.AuthController;
interface AuthState {
	isLogin: boolean;
	refreshToken: string | undefined;
	user: undefined | Auth.UserInfo;
}

const initialState: AuthState = {
	isLogin: false,
	refreshToken: undefined,
	user: undefined,
};

export default {
	namespace: "user",

	state: initialState,

	subscriptions: {
		setup({ dispatch }) {
			window.onload = () => {
				const user = sessionStorage.getItem("user");
				console.log("setup dispatch: " + user);
				if (user) {
					dispatch({
						type: "loginSuccess",
						payload:
							(JSON.parse(
								user as string
							) as Auth.User_Login_Response) || {},
					});
				}
			};
		},
	},

	reducers: {
		loginSuccess(
			state: AuthState,
			action: { payload: Auth.User_Login_Response }
		) {
			return {
				...state,
				isLogin: true,
				refreshToken: undefined,
				user: action.payload,
			};
		},

		logout(state: AuthState) {
			return {
				...state,
				isLogin: false,
				refreshToken: undefined,
				user: undefined,
			};
		},
	},

	effects: {
		*doLogin({ payload, callback }, { put, call }) {
			let { loginInfo, resolve, reject } = payload;
			const { data, success } = yield call(login, loginInfo);
			if (data && success) {
				const userInfo = data as Auth.User_Login_Response;
				yield sessionStorage.setItem("user", JSON.stringify(userInfo));
				yield put({ type: "loginSuccess", payload: userInfo });
				if (callback) callback();
				resolve();
			} else {
				reject();
			}
		},
	},
};
