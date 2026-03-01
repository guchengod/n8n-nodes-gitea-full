import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeNotificationMarkReadById(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const id = context.getNodeParameter('notificationId', i) as string;

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/notifications/threads/${id}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
