import Guide from '@/components/Guide';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import { trim } from '@/utils/format';
import { useModel } from '@umijs/max';

const HomePage: React.FC = () => {
	const { name } = useModel('global');
	return (
		<PageContainer ghost>
			<div className={styles.container}>
				<Guide name={trim(name)} />
			</div>
		</PageContainer>
	);
};

export default HomePage;
