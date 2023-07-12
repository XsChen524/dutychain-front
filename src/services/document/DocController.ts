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

export { queryDocList };
