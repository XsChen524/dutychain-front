
import services from '@/services/document';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { Outlet, connect, history, useLocation } from '@umijs/max';
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';

const { queryDocList } = services.DocController;

const columns: ProColumns<Doc.Document_Table_Entity>[] = [
	{
		title: 'Document Key',
		dataIndex: 'key',
		valueType: 'text',
		width: '12%'
	},
	{
		title: 'Document Type',
		dataIndex: 'type',
		valueType: 'text',
		width: '10%'
	},
	{
		title: 'ID',
		dataIndex: 'id',
		valueType: 'text',
		width: '15%',
		copyable: true,
	},
	{
		title: 'Data',
		dataIndex: 'data',
		valueType: 'text',
		ellipsis: true,
	},
	{
		title: 'Detail',
		dataIndex: 'id',
		valueType: 'text',
		width: '10%',
		hideInSearch: true,
		render: (id, record) => {
			const path = '/document/' + id;
			if (record.type === 'contract' || record.type === 'Contract') {
				return <Button
					type='primary'
					shape="circle"
					icon={<SearchOutlined />}
					onClick={() => {
						history.push(path, { record });
					}}
				/>;
			}
		}
	},
];

const onClickCreate = () => {
	history.push('/document/creation');
};

const parseTableEntity = (data: Doc.Document[] | undefined): Doc.Document_Table_Entity[] => {
	const documentTableEntities: Doc.Document_Table_Entity[] = [];
	if (data) {
		for (let i = 0; i < data.length; i += 1) {
			documentTableEntities.push({
				key: data[i].key,
				id: data[i].record.id,
				type: data[i].record.type,
				data: JSON.stringify(data[i].record.data),
			});
		}
	}
	return documentTableEntities;
};

const DocumentPage: React.FunctionComponent<{ user: Auth.UserInfo }> = (props) => {

	const pathname = useLocation().pathname;

	const { user } = props;
	const [params, setParams] = useState<Doc.Document_List_Query_Params | undefined>(undefined);
	const actionRef = useRef<ActionType>();

	useEffect(() => {
		if (user) setParams({ ...user, organizationId: user.organization });
	}, [user]);

	return (
		<>
			{
				pathname === '/document'
					? <PageContainer ghost title={"Document"}>
						<ProTable<Doc.Document_Table_Entity, Doc.Document_List_Query_Params>
							actionRef={actionRef}
							params={params}
							rowKey="key"
							search={false}
							toolBarRender={() => [
								<Button key="1" type="primary" onClick={onClickCreate} > Create </Button>,
							]}
							request={async (params /*, sort, filter */) => {
								const { data, success } = await queryDocList(params);
								return {
									success: !!(success),
									data: parseTableEntity(data),
									total: data?.length || 0,
								};
							}}
							columns={columns}
						/>
					</PageContainer>
					: <Outlet />
			}
		</>
	);
};

const mapStateToProps = (state: { user: Auth.UserState }) => {
	const user: Auth.UserInfo | undefined = state.user.user;
	return { user };
};

export default connect(mapStateToProps)(DocumentPage);

