import { Button, Result, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, PageContainer, ProFormText } from '@ant-design/pro-components';
import { connect } from '@umijs/max';
import { useEffect, useState } from 'react';

const AuthPage: React.FunctionComponent<{ user, dispatch }> = (props) => {

	const { user, dispatch } = props;

	const [loginInfo, setLoginInfo] = useState<Auth.User_Login_Request | undefined>(undefined);
	const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

	const onClickShowAuth = () => {
		console.log(user);
	};

	const onFinish = async (formValue: Auth.User_Login_Request | undefined): Promise<void> => {
		if (formValue) {
			setLoginInfo(formValue);

			// Post request, should dispatch and reload
			// const data = await login(formValue);
			return new Promise((resolve, reject) => {
				dispatch({
					type: 'user/doLogin',
					payload: {
						loginInfo: formValue,
						resolve,
						reject
					},
					callback: async () => {
						setLoginSuccess(true);
						await (async (time) => {
							return new Promise((resolve) => setTimeout(resolve, time));
						})(5000);
						window.location.replace('/');
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
			{loginSuccess ?
				<div>
					<Result
						status="success"
						title="Successfully login!"
						subTitle="The page will be directed in 5 seconds"
						extra={[
							<Button key={'showAuth'} onClick={onClickShowAuth}>Show state</Button>
						]}
					/>
				</div> :
				<div>
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
						<div
							style={{
								marginBlockEnd: 24,
							}}
						>
							<a
								style={{
									float: 'right',
									marginBottom: 20
								}}
							>
								Forget password
							</a>
						</div>
					</LoginForm>
				</div>
			}
		</PageContainer>
	);
};

const mapStateToProps = (state) => {
	const { user } = state;
	return { user };
};

export default connect(mapStateToProps)(AuthPage);
