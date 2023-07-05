import styles from '@/stylesheets/defaultPages.less';
import { AdminHeaderDesc, AdminTable } from './components';
import { PageContainer } from '@ant-design/pro-components';
import { connect } from '@umijs/max';

const AdminPage: React.FunctionComponent<{ user: Auth.UserInfo, dispatch }> = (props) => {

	const { user } = props;

	return (
		<PageContainer
			ghost
			header={{ title: 'Organization Administration', }}
			content={<AdminHeaderDesc user={user} />}
		>
			<AdminTable user={user} />
		</PageContainer>
	);
};


const mapStateToProps = (state) => {
	return { user: state.user.user };
};

export default connect(mapStateToProps)(AdminPage);
