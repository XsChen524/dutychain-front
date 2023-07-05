const initialAccess = (initialState: {
	isLoggedIn: boolean;
	isAdmin: boolean;
	name: string | undefined;
}) => {
	const isLoggedIn = initialState.isLoggedIn;
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
