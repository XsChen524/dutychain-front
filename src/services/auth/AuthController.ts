import { request } from "@umijs/max";

const login = async (
	body: Auth.User_Login_Request,
	options?: { [key: string]: any }
) => {
	return request<Auth.User_Login_Response>("/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: body,
		...(options || {}),
	}).catch(function (err) {
		if (err.response) {
			console.error(err.response.status);
		}
	});
};

const queryUsersByOrg = async (
	params: {
		organization: string;
		jwt: string;
	},
	options?: {
		[key: string]: any;
	}
): Promise<void | {
	success: boolean;
	data: Auth.User_Query_List[];
}> => {
	return request<{ success: boolean; data: Auth.User_Query_List[] }>(
		`/admin/${params.organization}/user`,
		{
			method: "GET",
			headers: {
				Authorization: params.jwt,
			},
			...(options || {}),
		}
	).catch((err) => {
		console.error("queryUsersByOrg: " + err);
	});
};

export { login, queryUsersByOrg };
