interface ProjectProps {
	/**
	 * Properties of project object
	 * @argument {number} id project id
	 * @argument {string} name project name
	 * @argument {string} description project description
	 * @argument {number[]} vendorId ids of the project vendors
	 */
	id: number;
	name: string;
	description: string;
	vendorId: number[];
}

export default class Project implements ProjectProps {
	id: number;
	name: string;
	description: string;
	vendorId: number[];

	constructor(projectArgs: ProjectProps) {
		this.id = projectArgs.id;
		this.name = projectArgs.name;
		this.description = projectArgs.description;
		this.vendorId = projectArgs.vendorId;
	}
}
