import { AdminHeaderDesc, AdminTable } from './components';
import { PageContainer } from '@ant-design/pro-components';
import { connect } from '@umijs/max';

const AdminPage: React.FunctionComponent<{ user: Auth.UserInfo, dispatch: any }> = (props) => {

	const { user } = props;

	return (
		<PageContainer
			ghost
			header={{ title: 'Organization Administration', }}
			content={user ? <AdminHeaderDesc user={user} /> : undefined}
		>
			<AdminTable user={user} />
		</PageContainer>
	);
};


const mapStateToProps = (state: { user: Auth.UserState }) => {
	const { user } = state.user;
	return { user };
};


export default connect(mapStateToProps)(AdminPage);
