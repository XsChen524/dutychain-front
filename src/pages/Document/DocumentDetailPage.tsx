import services from '@/services/document';
import { Button, message } from 'antd';
import { PageContainer, ProCard, ProDescriptions } from "@ant-design/pro-components";
import { connect, useParams } from '@umijs/max';
import { useEffect, useState } from "react";


const { queryDocDetail, validateDoc } = services.DocController;


const DocumentDetailPage: React.FunctionComponent<{ user: Auth.UserInfo }> = (props) => {

	const [messageApi, contextHolder] = message.useMessage();

	const documentId = useParams().id as string;
	const { user } = props;
	const [document, setDocument] = useState<Doc.Document | undefined>(undefined);

	const validate = async () => {
		const { data, success } = await validateDoc(documentId, user.token);
		if (success) {
			messageApi.open({
				type: 'success',
				content: 'Validated.',
			});
		} else {
			messageApi.open({
				type: 'error',
				content: data,
			});
		}
	};

	useEffect(() => {
		const loadDetail = async () => {
			const { success, data } = await queryDocDetail(documentId);
			if (success) {
				setDocument((data as Doc.Document[])[0]);
			}
		};
		loadDetail();
	}, [documentId]);

	/*
	const contract: Doc.Document = {
		...JSON.parse(JSON.parse(record.data)),
		id: documentId === record.id ? documentId : record.id,
		type: record.type,
	};
	*/

	return (
		<PageContainer ghost title={'Contract Detail'}>
			{contextHolder}
			<ProCard
				title="Contract"
				split={'horizontal'}
				extra={
					<Button
						onClick={validate}
					>
						Validate
					</Button>
				}
				bordered
				headerBordered
			>
				{document ?
					<ProCard>
						<ProDescriptions bordered column={1}>
							<ProDescriptions.Item label='ID'>{document.id}</ProDescriptions.Item>
							<ProDescriptions.Item label='Title'>{document.title}</ProDescriptions.Item>
							<ProDescriptions.Item label='Data'>{document.data}</ProDescriptions.Item>
							<ProDescriptions.Item label='Vendor ID'>{document.vendorId}</ProDescriptions.Item>
						</ProDescriptions>
					</ProCard>
					: null}
			</ProCard>
		</PageContainer>
	);
};

const mapStateToProps = (state: { user: Auth.UserState }) => {
	const user: Auth.UserInfo | undefined = state.user.user;
	return { user };
};

export default connect(mapStateToProps)(DocumentDetailPage);
