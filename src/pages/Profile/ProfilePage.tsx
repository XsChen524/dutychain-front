import { Button, Descriptions } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { connect } from '@umijs/max';

const ProfilePage: React.FunctionComponent<{ user: Auth.UserInfo, dispatch }> = (props) => {

	const { user } = props;

	const onClickLogout = () => {
		console.log(user);
	};

	return (
		<PageContainer ghost>
			<div>
				<Descriptions title="Profile">
					<Descriptions.Item label="ID">{user.id}</Descriptions.Item>
					<Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
					<Descriptions.Item label="Email">{user.email}</Descriptions.Item>
					<Descriptions.Item label="Organization">{user.organization}</Descriptions.Item>
					<Descriptions.Item label="Administrator">{
						user.isAdmin ? 'Y' : 'N'
					}</Descriptions.Item>
					<Descriptions.Item label="Role">{user.role}</Descriptions.Item>
				</Descriptions>
			</div>
			<Button
				onClick={onClickLogout}
			>Logout</Button>
		</PageContainer>

	);
};

const mapStateToProps = (state) => {
	return { user: state.user.user };
};

export default connect(mapStateToProps)(ProfilePage);

