import CreateForm from './components/CreateForm';
import services from '@/services/vendor';
import styles from './index.less';
import { ActionType, PageContainer, ProDescriptionsItemProps, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';

const { queryVendorList } = services.VendorController;

export default function Page() {
	const [createModalVisible, handleModalVisible] = useState<boolean>(false);
	const [selectedRowsState, setSelectedRows] = useState<Vendor.VendorInfo[]>([]);
	const actionRef = useRef<ActionType>();
	const columns: ProDescriptionsItemProps<Vendor.VendorInfo>[] = [
		{
			title: 'Vendor Id',
			dataIndex: 'id',
			valueType: 'text',
		},
		{
			title: 'Name',
			dataIndex: 'name',
			valueType: 'text',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			valueType: 'text',
		},
		{
			title: 'Role',
			dataIndex: 'role',
			valueType: 'text',
		}
	];

	return (
		<PageContainer
			header={{
				title: "Vendor"
			}}
		>
			<ProTable<Vendor.VendorInfo>
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
						新建
					</Button>,
				]}
				request={async (params, sorter, filter) => {
					const { data, success } = await queryVendorList({
						...params,
						// FIXME: remove @ts-ignore
						// @ts-ignore
						sorter,
						filter,
					});
					console.log(data);
					return {
						data: data,
						success,
					};
				}}
				columns={columns}
				rowSelection={{
					onChange: (_, selectedRows) => setSelectedRows(selectedRows),
				}}
			/>
			<CreateForm
				onCancel={() => handleModalVisible(false)}
				modalVisible={createModalVisible}
			>
				<ProTable<Vendor.VendorInfo, Vendor.VendorInfo>
					onSubmit={async () => {
						// TBD
					}}
					rowKey="id"
					type="form"
					columns={columns}
				/>
			</CreateForm>
		</PageContainer>
	);
}
