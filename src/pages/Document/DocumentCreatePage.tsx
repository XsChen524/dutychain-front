import moment from 'moment';
import services from '@/services/document';
import { Col, Row, Space } from "antd";
import { Outlet } from '@umijs/max';
import { PageContainer, ProForm, ProFormText, ProFormTextArea } from "@ant-design/pro-components";
import { connect, history, useLocation } from "@umijs/max";

const { createDocument } = services.DocController;


const DocumentCreatePage: React.FunctionComponent<{ user: Auth.UserInfo | undefined }> = (props) => {

	const { user } = props;

	const pathname = useLocation().pathname;

	/*
	const [initialForm, setInitialForm] = useState<{
		id: string;
		type: string;
		operatorOrg: string,
		operatorName: string,
	} | undefined>(undefined);
	*/

	const formItemLayout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 14 },
	};

	const onFinish = async (formData: Doc.Create_Document_Request): Promise<boolean | void> => {
		if (user) {
			const { success, data } = await createDocument(formData, user.token);
			if (data) {
				history.push(
					`/document/creation/${data.id}/result`,
					{
						success,
						data,
						time: moment().format()
					}
				);
			}
		}
	};

	/*
	useEffect(() => {
		if (user) setInitialForm({
			id: randomString(12),
			type: 'Contract',
			operatorOrg: user.organization,
			operatorName: user.name,
		});
	}, [user]);
	*/

	return (
		<>
			{pathname !== '/document/creation' ? <Outlet /> :
				<PageContainer ghost title={"Create a document"}>
					<ProForm<Doc.Document>
						{...formItemLayout}
						layout={'horizontal'}
						submitter={{
							render: (props, doms) => {
								return (
									<Row>
										<Col span={14} offset={8}>
											<Space>{doms}</Space>
										</Col>
									</Row>
								);
							}
						}}
						onFinish={onFinish}
					>
						<ProFormText
							width="md"
							name="title"
							label='Title'
							rules={[{
								required: true,
								type: 'string',
								whitespace: true,
							}]}
						/>
						<ProFormTextArea
							width="md"
							name="data"
							label='Data'
							rules={[{
								required: true,
								type: 'string',
								whitespace: true,
							}]}
						/>
					</ProForm>
				</PageContainer>
			}
		</>
	);
};

const mapStateToProps = (state: { user: Auth.UserState }) => {
	const user: Auth.UserInfo | undefined = state.user.user;
	return { user };
};

export default connect(mapStateToProps)(DocumentCreatePage);

/*
	<ProFormText
		width="md"
		name="fromOrg"
		label='Transfer from organization'
		dataFormat={undefined}
		rules={[{
			required: true,
			type: 'string',
		}]}
	/>
	<ProFormText
		width="md"
		name="toOrg"
		label='Transfer to organization'
		dataFormat={undefined}
		rules={[{
			required: true,
			type: 'string',
		}]}
	/>

								<ProFormTextArea
								width="md"
								name="description"
								label='Description'
								rules={[{
									required: true,
									type: 'string',
									whitespace: true,
								}]}
							/>
							<ProFormText
								readonly
								width="md"
								name="id"
								label='Transaction ID'
								placeholder={initialForm.id}
							/>
							<ProFormText
								readonly
								width="md"
								name="type"
								label='Type'
								placeholder={initialForm.type}
							/>
							<ProFormText
								readonly
								width="md"
								name="operatorOrg"
								label='Organization of operator'
								placeholder={initialForm.operatorOrg}
								rules={[{
									type: 'string',
								}]}
							/>
							<ProFormText
								readonly
								width="md"
								name="operatorName"
								label='Operator Name'
								placeholder={initialForm.operatorName}
							/>
*/
