import { ActionType, ProDescriptionsItemProps, ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import { queryUsersByOrg } from "@/services/auth/AuthController";
import { useRef, useState } from "react";

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
	}
];

const AdminTable: React.FunctionComponent<{ user: Auth.UserInfo }> = (props) => {

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
		</>
	);
};

export default AdminTable;
