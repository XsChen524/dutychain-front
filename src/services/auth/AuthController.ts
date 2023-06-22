import { request } from "@umijs/max";

const login = async (
	body?: Auth.User_Login_Request,
	options?: { [key: string]: any }
) => {
	return request<Auth.User_Login_Response | undefined>(
		GLOBAL_HOST + "/auth/login",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: body,
			...(options || {}),
		}
	);
};

export { login };
