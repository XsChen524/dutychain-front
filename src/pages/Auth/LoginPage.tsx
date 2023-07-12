import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, PageContainer, ProFormText } from '@ant-design/pro-components';
import { connect, history } from '@umijs/max';
import { useEffect, useState } from 'react';

const AuthPage: React.FunctionComponent<{ dispatch: any }> = (props) => {

	const { dispatch } = props;

	const [loginInfo, setLoginInfo] = useState<Auth.User_Login_Request | undefined>(undefined);
	const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

	const onFinish = async (loginParams: Auth.User_Login_Request | undefined): Promise<boolean | undefined> => {
		if (loginParams) {
			setLoginInfo(loginParams);
			return new Promise<boolean>((resolve) => {
				dispatch({
					type: 'user/doLogin',
					payload: { loginParams, resolve },
					callback: (isComplete: boolean, message: string) => {
						console.log(isComplete);
						console.log(message);
						setLoginSuccess(true);
						history.push('/auth/login/result', { isComplete });
					}
				});
			});
		}
	};

	useEffect(() => {
		console.log(loginInfo);
	}, [loginInfo]);

	return (
		<PageContainer ghost>
			<LoginForm
				title="DutyChain"
				subTitle="Login for all organizations"
				onFinish={onFinish}
			>
				<ProFormText
					name="name"
					fieldProps={{
						size: 'large',
						prefix: <UserOutlined className={'prefixIcon'} />,
					}}
					placeholder={'Username'}
					rules={[
						{
							required: true,
							message: 'Please fill in username',
						},
					]}
				/>
				<ProFormText.Password
					name="password"
					fieldProps={{
						size: 'large',
						prefix: <LockOutlined className={'prefixIcon'} />,
					}}
					placeholder={'Password'}
					rules={[
						{
							required: true,
							message: 'Please fill in password',
						},
					]}
				/>
			</LoginForm>
		</PageContainer>
	);
};

const mapStateToProps = (state: { user: Auth.UserState }) => {
	const { user } = state;
	return { user };
};

export default connect(mapStateToProps)(AuthPage);
