import services from '@/services/auth';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, PageContainer, ProFormText } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';

const { login } = services.AuthController;

const AuthPage: React.FC = () => {

	const [loginInfo, setLoginInfo] = useState<Auth.User_Login_Request | undefined>(undefined);

	const onFinish = async (formValue: Auth.User_Login_Request | undefined): Promise<boolean> => {
		if (formValue) {
			setLoginInfo(formValue);

			// Post request, should dispatch and reload
			const data = await login(formValue);
			if (data) {
				console.log(data);
			} else {
				console.log('undefined');
			}
			return true;
		} else {
			return false;
		}

	};

	useEffect(() => {
		console.log(loginInfo);
	}, [loginInfo]);

	return (
		<PageContainer ghost>
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
		</PageContainer>
	);
};

export default AuthPage;
