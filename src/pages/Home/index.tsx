import styles from './index.less';
import { Layout, Row, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

const HomePage: React.FC = () => {
	const { name } = useModel('global');
	return (
		<PageContainer ghost>
			<div className={styles.container}>
				<Layout>
					<Row>
						<Typography.Title level={3} className={styles.title}>
							Hello {name}!
						</Typography.Title>
					</Row>
				</Layout>
			</div>
		</PageContainer>
	);
};

export default HomePage;
