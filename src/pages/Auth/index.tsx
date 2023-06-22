import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, PageContainer, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';

export default function Page() {
	return (
		<PageContainer ghost>
			<div>
				<LoginForm
					title="DutyChain"
					subTitle="Login for all organizations"
				>
					<ProFormText
						name="username"
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
						<ProFormCheckbox noStyle name="autoLogin">
							Auto login
						</ProFormCheckbox>
						<a
							style={{
								float: 'right',
							}}
						>
							Forget password
						</a>
					</div>
				</LoginForm>
			</div>
		</PageContainer>
	);
}
