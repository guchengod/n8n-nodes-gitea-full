import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserPublicKeyCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const key = context.getNodeParameter('key', i) as string;
	const title = context.getNodeParameter('title', i, '') as string;

	const body: IDataObject = {
		key,
	};
	if (title) {
		body.title = title;
	}

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/user/keys`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
