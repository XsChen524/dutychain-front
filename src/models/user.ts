import services from "@/services/auth";

const { login } = services.AuthController;

interface AuthState {
	isLogin: boolean;
	token: string | undefined;
	user: undefined | Auth.UserInfo;
}

const initialState: AuthState = {
	isLogin: false,
	token: undefined,
	user: undefined,
};

export default {
	namespace: "user",

	state: initialState,

	reducers: {
		loginSuccess(state: AuthState, action: { payload: Auth.UserInfo }) {
			return {
				...state,
				isLogin: true,
				user: action.payload,
			};
		},

		logoutSuccess(state: AuthState) {
			return {
				...state,
				isLogin: false,
				user: undefined,
			};
		},
	},

	effects: {
		*doLogin({ payload }, { put, call }) {
			let { loginInfo, resolve, reject } = payload;
			const { data, success } = yield call(login, loginInfo);
			if (data && success) {
				console.log("Dva: doLogin succeed");
				const userInfo = data;
				yield sessionStorage.setItem("user", JSON.stringify(userInfo));
				yield put({ type: "loginSuccess", payload: userInfo });
				resolve();
			} else {
				reject(data);
			}
		},
	},
};
