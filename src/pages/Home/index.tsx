import styles from '@/stylesheets/defaultPages.less';
import { Layout, Row, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

const { Title, Paragraph, Text, Link } = Typography;

const HomePage: React.FC = () => {

	// const { name } = useModel('global');
	console.log('Get user from session' + sessionStorage.getItem("user"));

	return (
		<PageContainer ghost>
			<div className={styles.container}>
				<Layout>
					<Row>
						<Typography>
							<Title level={2} className={styles.title}>
								DutyChain
							</Title>
							<Title level={3} className={styles.title}>
								Responsibility Tracing Based on Distributed Ledger
							</Title>
						</Typography>
					</Row>
				</Layout>
			</div>
		</PageContainer>
	);
};

export default HomePage;
