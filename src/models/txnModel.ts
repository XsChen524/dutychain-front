interface TxnProps {
	/**
	 * Properties of transaction object
	 * @argument {string} id txn id digest
	 * @argument {string} blockId block id digest
	 * @argument {string} type operation type, e.g. creation, update
	 * @argument {number} operatorId id of who request the txn
	 * @argument {string} description txn description
	 * @argument {string} createdAt UTC+8 time of creating the txn
	 * @argument {string} commitedAt UTC+8 time of committing the txn on ledger
	 * @argument {number} fromVendor id whose responsibility transferred from
	 * @argument {number} toVendor id whose reponsibility transferred to
	 */
	id: string;
	blockId: string;
	type: string;
	operatorId: number;
	description: string;
	createdAt: string;
	commitedAt: string;
	fromVendor: number;
	toVendor: number;
}
