import { Button, Result } from "antd";
import { PageContainer } from "@ant-design/pro-components";
import { useEffect } from "react";
import { useLocation } from "@umijs/max";

const LoginResultPage: React.FC = () => {

	const location = useLocation();

	const { isComplete, message } = location.state as {
		isComplete: boolean;
		message: string;
	};

	const delay = async (time: number) => {
		// eslint-disable-next-line no-promise-executor-return
		return new Promise((resolve) => setTimeout(resolve, time));
	};

	const onClickRedirect = () => {
		window.location.replace('/');
	};

	useEffect(() => {
		if (isComplete) {
			delay(5000).then(() => {
				window.location.replace('/');
			});
		}
	});

	return (
		<PageContainer ghost title={'Login Result'} >
			{
				isComplete ?
					<Result
						status="success"
						title={message}
						subTitle="The page will be redirected in 5 seconds."
						extra={[
							<Button key={'redirect'} onClick={onClickRedirect}>Redirect</Button>
						]}
					/>
					:
					<Result
						status="error"
						title={message}
					/>
			}

		</PageContainer>
	);
};

export default LoginResultPage;
