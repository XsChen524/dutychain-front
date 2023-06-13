declare namespace Doc {
	export interface DocInfo {
		id: string;
		title: string;
		data: string;
		vendorId: string;
	}

	export interface DocInfo_Request {
		title: string;
		data: string;
		vendorId: string;
	}

	export type DocInfo_Response = DocInfo;
}
