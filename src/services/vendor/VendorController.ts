import { request } from "@umijs/max";

export async function queryUserList(
	params: {
		// query
		/** keyword */
		keyword?: string;
		/** current */
		current?: number;
		/** pageSize */
		pageSize?: number;
	},
	options?: { [key: string]: any }
) {
	return request<API.Result_PageInfo_UserInfo__>("/api/v1/queryUserList", {
		method: "GET",
		params: {
			...params,
		},
		...(options || {}),
	});
}

export async function addUser(
	body?: API.UserInfoVO,
	options?: { [key: string]: any }
) {
	return request<API.Result_UserInfo_>("/api/v1/user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: body,
		...(options || {}),
	});
}

export async function getUserDetail(
	params: {
		// path
		/** userId */
		userId?: string;
	},
	options?: { [key: string]: any }
) {
	const { userId: param0 } = params;
	return request<API.Result_UserInfo_>(`/api/v1/user/${param0}`, {
		method: "GET",
		params: { ...params },
		...(options || {}),
	});
}
