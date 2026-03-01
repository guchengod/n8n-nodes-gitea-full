import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminCronRun(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const task = context.getNodeParameter('task', i) as string;

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/admin/cron/${task}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
