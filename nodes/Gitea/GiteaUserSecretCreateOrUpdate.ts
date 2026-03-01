import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserSecretCreateOrUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const secretName = context.getNodeParameter('secretName', i) as string;
	const data = context.getNodeParameter('data', i) as string;

	const body: IDataObject = {
		data: data,
	};

	const options: IHttpRequestOptions = {
		method: 'PUT',
		url: `${baseUrl}/api/v1/user/actions/secrets/${secretName}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
