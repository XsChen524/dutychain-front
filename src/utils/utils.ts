export const loadInitialData = async (): Promise<undefined | Auth.UserInfo> => {
	return new Promise<undefined | Auth.UserInfo>((resolve) => {
		const userInfo = sessionStorage.getItem("user");
		if (userInfo) resolve(JSON.parse(userInfo));
		else resolve(undefined);
	});
};

/**
 * Determine if the key is one of keys in object
 * @param key
 * @param object
 * @returns boolean
 */
const isValidKey = (
	key: string | number | symbol,
	object: object
): key is keyof typeof object => {
	return key in object;
};

/**
 * Parse the object of request body into UrlEncoded string
 * @param {Object} obj Object of type T
 * @returns {string} x-www-form-urlencoded request body
 */
export const parseUrlEncodedBody = (obj: object): string => {
	let requestParams: string[] = new Array<string>();
	Object.keys(obj).forEach((key) => {
		if (isValidKey(key, obj)) {
			let encodedKey = encodeURIComponent(key);
			let encodedValue = encodeURIComponent(obj[key]);
			requestParams.push(encodedKey + "=" + encodedValue);
		}
	});
	let requestBodyParse = requestParams.join("&");
	return requestBodyParse;
};
