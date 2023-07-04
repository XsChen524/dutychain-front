const initialAccess = (initialState: { isLoggedIn: boolean }) => {
	const isLoggedIn = initialState.isLoggedIn;
	const isLoggedOut = !isLoggedIn;
	const canSeeAdmin = initialState ? true : false;
	console.log("isLoggedIn: " + isLoggedIn);
	console.log("canSeeAdmin: " + canSeeAdmin);
	return {
		isLoggedIn,
		isLoggedOut,
		canSeeAdmin,
	};
};

export default initialAccess;
