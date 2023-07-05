import { Descriptions } from 'antd';

const AdminHeaderDesc: React.FunctionComponent<{ user: Auth.UserInfo }> = (props) => {

	const { user } = props;

	return (
		<Descriptions
			column={3}
			bordered={true}
		>
			<Descriptions.Item label="Administrator Name">{user.name}</Descriptions.Item>
			<Descriptions.Item label="Email">{user.email}</Descriptions.Item>
			<Descriptions.Item label="Organization">{user.organization}</Descriptions.Item>
		</Descriptions>
	);
};

export default AdminHeaderDesc;
