// 运行时配置
import { RequestConfig } from "@umijs/max";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
	isLoggedIn: boolean;
	isAdmin: boolean | undefined;
	name: string | undefined;
}> {
	const userStr: string | null = sessionStorage.getItem("user");
	if (userStr) {
		const user: Auth.UserInfo = JSON.parse(userStr);
		console.log(user);
		return {
			isLoggedIn: true,
			isAdmin: user.isAdmin,
			name: user.name,
		};
	} else {
		return {
			isLoggedIn: false,
			isAdmin: undefined,
			name: undefined,
		};
	}
}

export const layout = () => {
	return {
		logo: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
		menu: {
			locale: false,
		},
	};
};

export const request: RequestConfig = {
	baseURL: GLOBAL_HOST,
	// `validateStatus` defines whether to resolve or reject the promise for a given
	// HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
	// or `undefined`), the promise will be resolved; otherwise, the promise will be
	// rejected.
	validateStatus: function (status) {
		return status >= 200 && status < 300; // default
	},

	timeout: 5000,
	// other axios options you want
	errorConfig: {
		errorHandler() {},
		errorThrower() {},
	},
	requestInterceptors: [],
	responseInterceptors: [],
};
