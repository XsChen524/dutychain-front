declare namespace Doc {
	/*
	export type DocInfo_Data_Contract = {
		metaId: number;
		fromVendor: number;
		toVendor: number;
		content: string;
	};
	*/

	export type Document = {
		id: string;
		title: string;
		data: string;
		vendorId: number;
	};

	/*
	export type Contract_Document = {
		id: string;
		type: "Contract" | string;
		operatorOrg: string;
		operatorName: string;
		title: string;
		description: string;
	};
	*/

	export type Document_Table_Entity = {
		id: string;
		title: string;
		data: string;
		vendorId: number;
	};

	export type Document_List_Query_Params = {
		vendorId: number;
	};

	export type Document_List_Query_Response = {
		success: boolean;
		data?: Document[];
	};

	export type Document_Detail_Query_Response = {
		success: boolean;
		data?: Document[];
	};

	export type Create_Document_Request = {
		title: string;
		data: string;
	};

	export type Create_Document_Response = {
		success: boolean;
		data: Document | undefined;
	};

	export type Validate_Response = {
		success: boolean;
		data: undefined | string;
	};
}
