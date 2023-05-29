import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';

export default function Page() {
	return (
		<PageContainer ghost>
			<div className={styles.container}>
				<p>Hello</p>
			</div>
		</PageContainer>
	);
}
