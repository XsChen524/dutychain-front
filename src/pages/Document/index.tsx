import CreateForm from './components/CreateForm';
import services from '@/services/document';
import { ActionType, PageContainer, ProDescriptionsItemProps, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';

const { queryDocList } = services.DocController;

const Page: React.FC = () => {
	const [createModalVisible, handleModalVisible] = useState<boolean>(false);
	const [selectedRowsState, setSelectedRows] = useState<Doc.DocInfo[]>([]);
	const actionRef = useRef<ActionType>();
	const columns: ProDescriptionsItemProps<Doc.DocInfo>[] = [
		{
			title: 'ID',
			dataIndex: 'id',
			valueType: 'text',
		},
		{
			title: 'Title',
			dataIndex: 'title',
			valueType: 'text',
		},
		{
			title: 'Data',
			dataIndex: 'data',
			valueType: 'text',
		},
		{
			title: 'Vendors',
			dataIndex: 'vendorId',
			valueType: 'text',
		}
	];

	const requestColumns: ProDescriptionsItemProps<Doc.DocInfo_Request>[] = [
		{
			title: 'Title',
			dataIndex: 'title',
			valueType: 'text',
		},
		{
			title: 'Data',
			dataIndex: 'data',
			valueType: 'text',
		},
		{
			title: 'Vendor',
			dataIndex: 'vendorId',
			valueType: 'text',
		}
	];

	return (
		<PageContainer
			header={{
				title: "Document"
			}}
		>
			<ProTable<Doc.DocInfo>
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
					const { data, success } = await queryDocList();
					console.log(GLOBAL_HOST);
					console.log(data);
					console.log(success);
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
				<ProTable<Doc.DocInfo, Doc.DocInfo>
					onSubmit={async () => {
						// TBD
					}}
					rowKey="id"
					type="form"
					columns={requestColumns}
				/>
			</CreateForm>
		</PageContainer>
	);
};

export default Page;
