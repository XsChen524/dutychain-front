import moment from "moment";
import { Button, Descriptions, Result } from "antd";
import { PageContainer } from "@ant-design/pro-components";
import { history, useLocation } from "@umijs/max";

const ResultPage: React.FC = () => {

	const location = useLocation();
	// const transactionId = useParams().id;

	const { success, data, time } = location.state as {
		success: boolean;
		data: { id: string; type: string; data: string } | undefined;
		time: string;
	};

	const onClickRedirect = () => {
		history.push('/document');
	};

	return (
		<PageContainer ghost>
			{
				success
					/**
					 * Success Result, consume msg and data
					 */
					? <Result
						status="success"
						title={'Succeed'}
						extra={[
							<Button key={'redirect'} onClick={onClickRedirect}>Redirect</Button>
						]}
					>
						< div className="desc" >
							<Descriptions title="Result">
								<Descriptions.Item label="ID">{data?.id}</Descriptions.Item>
								<Descriptions.Item label="created At">{moment(time).format('YYYY-MM-DD HH:mm:ss')}</Descriptions.Item>
							</Descriptions>
						</div >
					</Result>
					/**
					 * Failure result, consume msg only
					 */
					: <Result
						status="error"
						title={'Failed'}
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
