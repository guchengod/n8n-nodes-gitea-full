import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserAvatarDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/user/avatar`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
