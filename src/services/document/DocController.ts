import { request } from "@umijs/max";

export async function queryDocList(options?: { [key: string]: any }) {
	return request("http://127.0.0.1:7001/document", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		...(options || {}),
	});
}

export async function addUser(
	body?: Doc.DocInfo_Request,
	options?: { [key: string]: any }
) {
	return request<Doc.DocInfo_Response>("http://localhost:7001/document", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: body,
		...(options || {}),
	});
}
