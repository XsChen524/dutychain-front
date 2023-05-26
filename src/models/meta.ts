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

export default class Meta implements MetaProps {
	id: number;
	name: string;
	description: string;
	projectId: number;
	previous: number[];

	constructor(metaArgs: MetaProps) {
		this.id = metaArgs.id;
		this.name = metaArgs.name;
		this.description = metaArgs.description;
		this.projectId = metaArgs.projectId;
		this.previous = metaArgs.previous;
	}
}
