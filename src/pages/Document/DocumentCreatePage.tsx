import crypto from 'crypto';
import { Col, Input, Row, Space } from "antd";
import { FormListActionType, PageContainer, ProForm, ProFormDateRangePicker, ProFormDigit, ProFormList, ProFormText, ProFormTextArea } from "@ant-design/pro-components";
import { connect } from "@umijs/max";
import { useEffect, useRef, useState } from "react";;

const randomString = (len: number): string => {
	if (!Number.isFinite(len)) {
		throw new TypeError("Expected a finite number");
	}

	return crypto
		.randomBytes(Math.ceil(len / 2))
		.toString("hex")
		.slice(0, len);
};

const DocumentCreatePage: React.FunctionComponent<{ user: Auth.UserInfo | undefined }> = (props) => {

	const { user } = props;

	const [initialForm, setInitialForm] = useState<{
		id: string;
		type: string;
		operatorOrg: number,
		operatorName: string,
	} | undefined>(undefined);

	const formItemLayout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 14 },
	};

	const onFinish = async (formData: Doc.Contract_Document): Promise<boolean | void> => {

		return new Promise<boolean | void>((resolve, reject) => {
			if (user) {
				const body: Doc.Create_Document_Request = {
					id: formData.id,
					type: formData.type,
					org: formData.operatorOrg,
					walletId: user.walletId,
					data: JSON.stringify({
						title: formData.title,
						description: formData.description,
						fromOrg: formData.fromOrg,
						toOrg: formData.toOrg,
						operatorOrg: formData.operatorOrg,
						operatorName: formData.operatorName,
					})
				};
				console.log(body);
				/**
				 * Request
				 */
				resolve(true);
			} else {
				resolve(false);
			}
		});
	};

	useEffect(() => {
		if (user) setInitialForm({
			id: randomString(12),
			type: 'Contract',
			operatorOrg: user.organizationId,
			operatorName: user.name,
		});
	}, [user]);

	return (
		<PageContainer ghost title={"Create a document"}>
			{initialForm ?
				<ProForm<Doc.Contract_Document>
					{...formItemLayout}
					initialValues={initialForm}
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
					<ProFormDigit
						width="md"
						name="fromOrg"
						label='Transfer from organization'
						dataFormat={undefined}
						rules={[{
							required: true,
						}]}
					/>
					<ProFormDigit
						width="md"
						name="toOrg"
						label='Transfer to organization'
						dataFormat={undefined}
						rules={[{
							required: true,
						}]}
					/>
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
						placeholder={initialForm.operatorOrg.toString()}
						rules={[{
							type: 'number',
						}]}
					/>
					<ProFormText
						readonly
						width="md"
						name="operatorName"
						label='Operator Name'
						placeholder={initialForm.operatorName}
					/>
				</ProForm>
				: null}
		</PageContainer>
	);
};

const mapStateToProps = (state: { user: Auth.UserState }) => {
	const user: Auth.UserInfo | undefined = state.user.user;
	return { user };
};

export default connect(mapStateToProps)(DocumentCreatePage);
