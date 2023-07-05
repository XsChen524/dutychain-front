import { ActionType, ProDescriptionsItemProps, ProTable } from "@ant-design/pro-components";
import { Button, Tag, message } from "antd";
import { useRef, useState } from "react";

import UserCreateForm from "./UserCreateForm";
import services from '@/services/auth';

const { queryUsersByOrg, registerUser } = services.AuthController;

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: Auth.User_Signup_Request) => {
	const hide = message.loading('Creating');
	try {
		await registerUser({ ...fields });
		hide();
		message.success('Creation succeed');
		return true;
	} catch (error) {
		hide();
		message.error('Creation failed');
		return false;
	}
};

const columns: ProDescriptionsItemProps<Auth.User_Query_List>[] = [
	{
		title: 'ID',
		dataIndex: 'id',
		valueType: 'text',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		valueType: 'text',
	},
	{
		title: 'Email',
		dataIndex: 'email',
		valueType: 'text',
	},
	{
		title: 'Role',
		dataIndex: 'role',
		valueType: 'text',
	},
	{
		title: 'Admin',
		dataIndex: 'isAdmin',
		valueType: 'text',
		render: (bool) => {
			return (bool ? <Tag color="red">Admin</Tag> : <Tag color="green">User</Tag>);
		}
	}
];

const createColumns: ProDescriptionsItemProps<Auth.User_Signup_Request>[] = [
	{
		title: 'Name',
		dataIndex: 'name',
		valueType: 'text',
	},
	{
		title: 'Password',
		dataIndex: 'password',
		valueType: 'password',
	},
	{
		title: 'Email',
		dataIndex: 'email',
		valueType: 'email',
	},
	{
		title: 'Organization',
		dataIndex: 'organization',
		valueType: 'text',
	},
	{
		title: 'Role',
		dataIndex: 'role',
		valueType: 'text',
	},
];

const AdminTable: React.FunctionComponent<{ user: Auth.UserInfo }> = (props) => {

	/**
	 * Show creation modal
	 */
	const [createModalVisible, handleModalVisible] = useState<boolean>(false);

	const [selectedRowsState, setSelectedRows] = useState<Auth.User_Query_List[]>([]);
	const actionRef = useRef<ActionType>();

	return (
		<>
			<ProTable<Auth.User_Query_List>
				headerTitle="Organization User List"
				actionRef={actionRef}
				rowKey="id"
				search={{
					labelWidth: 120,
				}}
				toolBarRender={() => [
					<Button
						key="1"
						type="primary"
						onClick={() => handleModalVisible(true)}
					>
						Create
					</Button>,
				]}
				/**
				 * Axios request source
				 */
				request={async () => {
					const { success, data } = await queryUsersByOrg(
						{ organization: props.user.organization, jwt: props.user.token }
					) as { success: boolean; data: Auth.User_Query_List[]; };
					return { data, success };
				}}
				columns={columns}
				rowSelection={{
					onChange: (_, selectedRows) => setSelectedRows(selectedRows),
				}}
			/>
			<UserCreateForm
				onCancel={() => handleModalVisible(false)}
				modalVisible={createModalVisible}
			>
				<ProTable<Auth.User_Signup_Request, Auth.User_Signup_Request>
					onSubmit={async (value) => {
						const success = await handleAdd(value);
						if (success) {
							handleModalVisible(false);
							if (actionRef.current) {
								actionRef.current.reload();
							}
						}
					}}
					rowKey="id"
					type="form"
					columns={createColumns}
				/>
			</UserCreateForm>
		</>
	);
};

export default AdminTable;
