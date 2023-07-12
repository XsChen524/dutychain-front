const initialAccess = (initialState: {
	isLogin: boolean;
	isAdmin: boolean | undefined;
	name: string | undefined;
	user: Auth.UserInfo | undefined;
}) => {
	const isLoggedIn = !!(initialState && initialState.isLogin);
	const isLoggedOut = !isLoggedIn;
	const isAdmin = initialState.isAdmin ? true : false;
	console.log("isLoggedIn: " + isLoggedIn);
	console.log("isAdmin: " + isAdmin);
	return {
		isLoggedIn,
		isLoggedOut,
		isAdmin,
	};
};

export default initialAccess;
