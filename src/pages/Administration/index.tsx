import styles from '@/stylesheets/defaultPages.less';
import { Access } from '@umijs/max';
import { Button, Layout, Row, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useAccess } from '@umijs/max';

const { Title, Paragraph, Text, Link } = Typography;

const AdministrationPage = () => {
	const access = useAccess();

	return (
		<PageContainer ghost>
			<div className={styles.container}>
				<Layout>
					<Row>
						<Typography>
							<Title level={2} className={styles.title}>
								Administration
							</Title>
						</Typography>
					</Row>
				</Layout>
				<Access accessible={access.isAdmin}>
					<Button>Updated: 5/21</Button>
				</Access>
			</div>
		</PageContainer>
	);
};

export default AdministrationPage;
