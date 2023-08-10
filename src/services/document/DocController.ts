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
			// Authorization: "Bearer " + jwt,
		},
		params,
		...(options || {}),
	});
};

const createDocument = async (
	body: Doc.Create_Document_Request,
	jwt: string,
	options?: { [key: string]: any }
) => {
	return request<Doc.Create_Document_Response>("/document", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + jwt,
		},
		data: body,
		...(options || {}),
	});
};

const queryDocDetail = async (
	documentId: string,
	// jwt: string,
	options?: { [key: string]: any }
) => {
	return request<Doc.Document_Detail_Query_Response>(
		`/document/${documentId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				// Authorization: "Bearer " + jwt,
			},
			...(options || {}),
		}
	);
};

const validateDoc = async (
	documentId: string,
	jwt: string,
	options?: { [key: string]: any }
) => {
	return request<Doc.Validate_Response>(`/validate/${documentId}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + jwt,
		},
		...(options || {}),
	});
};

export { queryDocList, createDocument, queryDocDetail, validateDoc };
