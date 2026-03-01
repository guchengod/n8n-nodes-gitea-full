import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryNotificationMarkRead(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const lastReadAt = context.getNodeParameter('lastReadAt', i, '') as string;
	const all = context.getNodeParameter('all', i, false) as boolean;
	const status = context.getNodeParameter('status', i, []) as string[];

	const qs: IDataObject = {
		all: all.toString(),
	};
	if (lastReadAt) qs.last_read_at = lastReadAt;
	if (status && status.length > 0) qs.status = status;

	const options: IHttpRequestOptions = {
		method: 'PUT',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/notifications`,
		qs,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
