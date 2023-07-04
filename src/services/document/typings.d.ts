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

	export type DocInfo = {
		id: string;
		title: string;
		data: string;
		vendorId: string;
	};

	export interface DocInfo_Request {
		title: string;
		data: string;
		vendorId: string;
	}

	export type DocInfo_Response = DocInfo;
}
