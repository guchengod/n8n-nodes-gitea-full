import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeNotificationCheckUnread(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/notifications/new`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
