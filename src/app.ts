// 运行时配置
import { RequestConfig, RunTimeLayoutConfig } from "@umijs/max";
import { loadInitialData } from "./utils/utils";

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
	isLogin: boolean;
	isAdmin: boolean | undefined;
	name: string | undefined;
	user: Auth.UserInfo | undefined;
}> {
	console.log("getInitialState");
	const userInfo: Auth.UserInfo | undefined = await loadInitialData();
	const isLogin = !!userInfo;
	const isAdmin = userInfo?.isAdmin;
	const name = userInfo?.name;
	return {
		isLogin,
		isAdmin,
		name,
		user: userInfo ? userInfo : undefined,
	};
}

export const layout: RunTimeLayoutConfig = (initialState) => {
	return {
		appList: undefined,
		logo: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
		menu: {
			locale: false,
		},
		avatarProps: initialState.initialState?.isLogin
			? {
					src: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
					title: initialState.initialState?.name,
			  }
			: undefined,
		rightContentRender: false,
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
