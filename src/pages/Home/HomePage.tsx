import styles from './stylesheets/home-styles.less';
import { Layout, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

const { Title, Paragraph, Text } = Typography;

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
						<Paragraph className={styles.paragraph}>
							<Text className={styles.text}>
								The project deliverales submitted to Department of Computer Science, The University of Hong Kong
							</Text>
						</Paragraph >
						<Paragraph className={styles.paragraph}>
							<Text className={styles.text}>
								in partial fulfillment of the requirements for the degree of Master of Science in Computer Science
							</Text>
						</Paragraph>
						<Paragraph className={styles.paragraph}>
							<Text className={styles.text}>
								Chen Xingsheng, Mak Lam, Xie Ning
							</Text>
						</Paragraph>
					</Typography>
				</div>
			</Layout>
		</PageContainer>
	);
};

export default HomePage;
