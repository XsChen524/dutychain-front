import { Access } from '@umijs/max';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useAccess } from '@umijs/max';


const AccessTemplate = () => {
	const access = useAccess();

	return (
		<PageContainer ghost>
			<Access accessible={access.isAdmin}>
				<Button>Updated: 5/21</Button>
			</Access>
		</PageContainer>
	);
};

export default AccessTemplate;
