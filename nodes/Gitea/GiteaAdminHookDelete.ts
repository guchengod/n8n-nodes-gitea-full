import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminHookDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const id = context.getNodeParameter('id', i) as number;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/admin/hooks/${id}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
