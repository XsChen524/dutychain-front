declare namespace Vendor {
	export interface VendorInfo {
		/**
		 * Properties of vendor object
		 * @argument {number} id vendor id
		 * @argument {string} name vendor name
		 * @argument {string} description vendor description
		 * @argument {string} role vendor rol, e.g. contractor, audit
		 */

		id: number;
		name: string;
		description: string;
		role: string;
	}

	export interface VendorInfo_Request {
		name: string;
		description?: string;
		role?: string;
	}

	export type VendorInfo_Response = VendorInfo;
}
