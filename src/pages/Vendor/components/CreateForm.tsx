import React, { PropsWithChildren } from 'react';
import { Modal } from 'antd';

interface CreateFormProps {
	modalVisible: boolean;
	onCancel: () => void;
}

const CreateForm: React.FC<PropsWithChildren<CreateFormProps>> = (props) => {
	const { modalVisible, onCancel } = props;

	return (
		<Modal
			destroyOnClose
			title="Add Vendor"
			width={420}
			open={modalVisible}
			onCancel={() => onCancel()}
			footer={null}
		>
			{props.children}
		</Modal>
	);
};

export default CreateForm;
