import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserFollowingCheckAnother(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const follower = context.getNodeParameter('follower', i) as string;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/users/${owner}/following/${follower}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
