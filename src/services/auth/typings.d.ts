declare namespace Auth {
	export type UserInfo = {
		id: number;
		name: string;
		email: string;
		organization: string;
		organizationId: number;
		walletId: string;
		role: string;
		isAdmin: boolean;
		token: string;
		walletId: string;
	};

	export type UserState = {
		isLogin: boolean;
		isLoading: boolean;
		user: undefined | Auth.UserInfo;
	};

	/**
	 * Typings for login
	 */
	export interface User_Login_Request {
		name: string;
		password: string;
	}

	export interface User_Login_Response {
		id: number;
		name: string;
		email: string;
		organization: string; // Organization name
		role: string;
		isAdmin: boolean;
		token: string;
		walletId: string;
	}

	export interface User_Signup_Request {
		name: string;
		password: string;
		email: string;
		organizationId: number;
		role: "vendor" | "client";
		isAdmin?: boolean;
		wallet?: string;
	}

	export interface User_Signup_Response {
		success: boolean;
		data: {
			id: number;
			name: string;
			email: string;
			walletId: string;
			organization: string;
			role: "vendor" | "client";
			isAdmin: boolean;
		};
	}

	export interface User_Query_List {
		id: number;
		name: string;
		email: string;
		organization: string;
		role: "vendor" | "client";
		isAdmin: boolean;
	}
}
