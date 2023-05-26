// @/src/models/metaModel.ts

import { useEffect, useState } from "react";

interface MetaProps {
	/**
	 * Properties of responsibility object
	 * @argument {number} id id of the responsibility
	 * @argument {string} name name of the responsibility
	 * @argument {string} description name of the responsibility
	 * @argument {number} projectId id of project the responsibility belongs to
	 * @argument {number[]} previous previous transaction ids of the responsibility
	 */
	id: number;
	name: string;
	description: string;
	projectId: number;
	previous: number[];
}

const Meta = () => {
	const [meta, setMeta] = useState<MetaProps | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(true);

	return {
		meta,
		loading,
	};
};

export default Meta;
