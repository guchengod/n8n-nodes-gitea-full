import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActivityPubInboxPost(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const username = context.getNodeParameter('username', i) as string;
	const body = context.getNodeParameter('payload', i) as IDataObject;

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/activitypub/user/${username}/inbox`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
