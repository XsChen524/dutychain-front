import services from "@/services/auth";

const { login } = services.AuthController;

interface AuthState {
	isLogin: boolean;
	user: undefined | Auth.UserInfo;
}

const initialState: AuthState = {
	isLogin: false,
	user: undefined,
};

export default {
	namespace: "user",

	state: initialState,

	reducers: {
		signIn(state: AuthState, action: { payload: Auth.UserInfo }) {
			return {
				...state,
				isLogin: true,
				user: action.payload,
			};
		},

		signOut(state: AuthState) {
			return {
				...state,
				isLogin: false,
				user: undefined,
			};
		},
	},

	effects: {
		*login({ payload }, { put, call }: { put: any; call: any }) {
			let { loginInfo, resolve, reject } = payload;
			const { data } = yield call(login, loginInfo);

			console.log("User model effect *login: ");
			console.log(data);

			if (data && data.success) {
				/*
				let userInfo = data.userInfo;
				yield sessionStorage.setItem(
					"userInfo",
					JSON.stringify(userInfo)
				);
				//注册成功
				yield put({
					type: "logupSuccess",
					payload: userInfo,
				});
				*/
				resolve();
			} else {
				reject(data);
			}
		},
	},
};
