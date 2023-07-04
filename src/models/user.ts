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
		setup({ dispatch, history }) {
			history.listen((location) => {
				if (location.pathname === "/") {
					if (sessionStorage.getItem("user")) {
						dispatch({
							type: "loginSuccess",
							payload:
								(JSON.parse(
									sessionStorage.getItem("user") as string
								) as Auth.User_Login_Response) || {},
						});
					}
				}
			});
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
		*doLogin({ payload }, { put, call }) {
			let { loginInfo, resolve, reject } = payload;
			const { data, success } = yield call(login, loginInfo);
			if (data && success) {
				const userInfo = data;
				yield sessionStorage.setItem("user", JSON.stringify(userInfo));
				yield put({ type: "loginSuccess", payload: userInfo });
				resolve();
			} else {
				reject();
			}
		},
	},
};
