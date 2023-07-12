import styles from './stylesheets/home-styles.less';
import { Layout, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {

	return (
		<PageContainer ghost>
			<Layout>
				<div className={styles.homeContainer}>
					<Typography>
						<Title level={2} className={styles.title}>
							DutyChain
						</Title>
						<Paragraph>
							<Title level={4} className={styles.text}>
								Responsibility Tracing Based on Distributed Ledger
							</Title>
						</Paragraph>
					</Typography>
				</div>
			</Layout>
		</PageContainer>
	);
};

export default HomePage;
