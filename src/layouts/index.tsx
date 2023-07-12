import styles from '@/stylesheets/defaultPages.less';
import { Outlet, connect, useLocation } from "@umijs/max";
import { loadInitialData } from "@/utils/utils";
import { useEffect } from "react";

const Layout: React.FunctionComponent<{ userState: Auth.UserState, dispatch: any }> = (props) => {

	const { userState, dispatch } = props;

	const location = useLocation();
	const pathName = location.pathname;

	const bootstrap = async () => {
		const userInfo: undefined | Auth.UserInfo = await loadInitialData();
		if (userInfo) {
			dispatch({
				type: 'user/loginSuccess',
				payload: userInfo
			});
			console.log(`Dispatched Login at ${pathName}`);
		} else {
			dispatch({
				type: 'uset/logout',
			});
			console.log(`Dispatched Logout at ${pathName}`);
		}
	};

	useEffect(() => {
		const load = async () => {
			if (userState.isLoading) await bootstrap();
		};
		load();
	}, [userState]);

	return (
		<div className={styles.container}>
			<Outlet />
		</div>
	);
};

const mapStateToProps = (state: { user: Auth.UserState }) => {
	const userState: Auth.UserState = state.user;
	return { userState };
};

export default connect(mapStateToProps)(Layout);
