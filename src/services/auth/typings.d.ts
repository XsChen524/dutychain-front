declare namespace Auth {
	export interface UserInfo {
		id: number;
		name: string;
		email: string;
		organization: string;
		walletId?: string; // TBD
		role: "vendor" | "client";
		isAdmin: boolean;
		token: string;
	}
	export interface User_Query_List {
		id: number;
		name: string;
		email: string;
		organization: string;
		role: "vendor" | "client";
		isAdmin: boolean;
	}

	export interface User_Login_Request {
		name: string;
		password: string;
	}

	// Should be stored in dva
	export interface User_Login_Response {
		id: number;
		name: string;
		email: string;
		organization: string;
		role: "vendor" | "client";
		isAdmin: boolean;
		token: string;
	}

	export interface User_Signup_Request {
		name: string;
		password: string;
		email: string;
		// compulsory, select from drawable, could be "" if role is client
		organization: string;
		role: "vendor" | "client";
		isAdmin?: boolean;
		wallet?: string;
	}

	export interface User_Signup_Response {
		id: number;
		name: string;
		email: string;
		organization: string;
		walletId?: string;
		role: "vendor" | "client";
		isAdmin: boolean;
	}
}
