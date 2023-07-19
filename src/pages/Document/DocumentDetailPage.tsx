import { PageContainer, ProCard, ProDescriptions } from "@ant-design/pro-components";
import { useLocation, useParams } from "@umijs/max";

const DocumentDetailPage: React.FC = () => {

	const documentId = useParams().id as string;
	const location = useLocation();

	const { record } = location.state as {
		record: Doc.Document_Table_Entity
	};

	const contract: Doc.Contract_Document = {
		...JSON.parse(JSON.parse(record.data)),
		id: documentId === record.id ? documentId : record.id,
		type: record.type,
	};

	return (
		<PageContainer ghost title={'Contract Detail'}>

			<ProCard
				title="Contract"
				extra={contract.id}
				split={'horizontal'}
				bordered
				headerBordered
			>
				<ProCard>
					<ProDescriptions bordered column={1}>
						<ProDescriptions.Item label='ID'>{contract.id}</ProDescriptions.Item>
						<ProDescriptions.Item label='Type'>{contract.type}</ProDescriptions.Item>
						<ProDescriptions.Item label='Title'>{contract.title}</ProDescriptions.Item>
						<ProDescriptions.Item label='Description'>{contract.description}</ProDescriptions.Item>
						<ProDescriptions.Item label='Sender'>Organization {contract.fromOrg}</ProDescriptions.Item>
						<ProDescriptions.Item label='Receiver'>Organization {contract.toOrg}</ProDescriptions.Item>
						<ProDescriptions.Item label='Operator'>{contract.operatorName}</ProDescriptions.Item>
						<ProDescriptions.Item label='Operator Organization'>Organization {contract.operatorOrg}</ProDescriptions.Item>
					</ProDescriptions>
				</ProCard>
			</ProCard>
		</PageContainer>
	);
};

export default DocumentDetailPage;
