import { request } from "@umijs/max";

export async function queryDocList(options?: { [key: string]: any }) {
	return request(GLOBAL_HOST + "/document", {
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
	return request<Doc.DocInfo_Response>("/api/document", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: body,
		...(options || {}),
	});
}
