import { request } from "@umijs/max";

const queryDocList = async (
	params: {
		// query
		/** keyword */
		keyword?: string;
		/** current */
		current?: number;
		/** pageSize */
		pageSize?: number;
	},
	// jwt: string,
	options?: { [key: string]: any }
) => {
	return request<Doc.Document_List_Query_Response>("/document", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		params,
		...(options || {}),
	});
};

const createDocument = async (
	body: Doc.Create_Document_Request,
	options?: { [key: string]: any }
) => {
	return request<Doc.Create_Document_Response>("/document", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: body,
		...(options || {}),
	});
};

export { queryDocList, createDocument };
