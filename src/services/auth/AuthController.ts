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

export { login };
