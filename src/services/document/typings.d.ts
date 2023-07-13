declare namespace Doc {
	/*
	export type DocInfo_Data_Contract = {
		metaId: number;
		fromVendor: number;
		toVendor: number;
		content: string;
	};

	export type DocInfo = {
		id: string;
		title: string;
		data: DocInfo_Data_Contract;
		vendorId: string;
	};
	*/

	export type Document = {
		key: number;
		record: {
			id: string;
			type: string;
			data: any;
		};
	};

	export type Contract_Document = {
		id: string;
		type: "Contract" | string;
		fromOrg: number;
		toOrg: number;
		operatorOrg: number;
		operatorName: string;
		title: string;
		description: string;
	};

	export type Document_Table_Entity = {
		key: number;
		type: string;
		data: string;
		id: string;
	};

	export type Document_List_Query_Params = {
		walletId: string;
		organizationId: number;
	};

	export type Document_List_Query_Response = {
		success: boolean;
		data?: Document[];
	};

	export type Create_Document_Request = {
		id: string; // transactionId, to be a random Hex
		type: string; // 'Contract' | string
		data: string; // The stringfied contract
		org: number;
		walletId: string;
	};

	export type Create_Document_Response = {
		id: string;
		type: string;
		data: string;
	};
}
