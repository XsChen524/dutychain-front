import React from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

export default function Page() {

	const onClickLogout = () => {

	};

	return (
		<PageContainer ghost>
			<div>
				<h1>Profile</h1>
				<Button
					onClick={onClickLogout}
				>Logout</Button>
			</div>
		</PageContainer>

	);
}
