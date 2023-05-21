import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

const AccessPage: React.FC = () => {
	const access = useAccess();
	return (
		<PageContainer
			ghost
			header={{
				title: '权限示例',
			}}
		>
			<Access accessible={access.canSeeAdmin}>
				<Button>Updated: 5/21</Button>
			</Access>
		</PageContainer>
	);
};

export default AccessPage;
