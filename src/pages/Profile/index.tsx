import { Button, Descriptions } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { connect } from '@umijs/max';

const ProfilePage: React.FunctionComponent<{ user: Auth.UserInfo, dispatch }> = (props) => {
	const { user, dispatch } = props;

	const onClickLogout = () => {
		console.log(user);
	};

	return (
		<PageContainer ghost>
			<div>
				<Descriptions title="Profile">
					<Descriptions.Item label="UserName">user</Descriptions.Item>
					<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
					<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
					<Descriptions.Item label="Remark">empty</Descriptions.Item>
					<Descriptions.Item label="Address">
						No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
					</Descriptions.Item>
				</Descriptions>
			</div>
			<Button
				onClick={onClickLogout}
			>Logout</Button>
		</PageContainer>

	);
};

const mapStateToProps = (state) => {
	const { user } = state.user;
	return { user };
};

export default connect(mapStateToProps)(ProfilePage);

