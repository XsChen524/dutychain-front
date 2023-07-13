import moment from "moment";
import { Button, Descriptions, Result } from "antd";
import { PageContainer } from "@ant-design/pro-components";
import { history, useLocation } from "@umijs/max";
import { useEffect } from "react";

const ResultPage: React.FC = () => {

	const location = useLocation();
	// const transactionId = useParams().id;

	const { success, data, msg, time } = location.state as {
		success: boolean;
		data: Doc.Create_Document_Response | undefined;
		msg: string;
		time: string;
	};

	const onClickRedirect = () => {
		history.push('/document');
	};

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<PageContainer ghost>
			{
				success
					/**
					 * Success Result, consume msg and data
					 */
					? <Result
						status="success"
						title={msg}
						extra={[
							<Button key={'redirect'} onClick={onClickRedirect}>Redirect</Button>
						]}
					>
						< div className="desc" >
							<Descriptions title="Result">
								<Descriptions.Item label="ID">{(data as Doc.Create_Document_Response).id}</Descriptions.Item>
								<Descriptions.Item label="Type">{(data as Doc.Create_Document_Response).type}</Descriptions.Item>
								<Descriptions.Item label="Data">{(data as Doc.Create_Document_Response).data}</Descriptions.Item>
								<Descriptions.Item label="created At">{moment(time).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
							</Descriptions>
						</div >
					</Result>
					/**
					 * Failure result, consume msg only
					 */
					: <Result
						status="error"
						title={msg}
						subTitle="Please try again."
						extra={[
							<Button key={'redirect'} onClick={onClickRedirect}>Redirect</Button>
						]}
					/>
			}
		</PageContainer >
	);
};

export default ResultPage;
