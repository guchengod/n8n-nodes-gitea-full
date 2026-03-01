import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminUserPublicKeyDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const username = context.getNodeParameter('username', i) as string;
	const keyId = context.getNodeParameter('keyId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/admin/users/${username}/keys/${keyId}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
