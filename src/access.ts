const initialAccess = (initialState: Auth.UserInfo) => {
	const canSeeAdmin = initialState ? true : false;

	return {
		canSeeAdmin,
	};
};

export default initialAccess;
