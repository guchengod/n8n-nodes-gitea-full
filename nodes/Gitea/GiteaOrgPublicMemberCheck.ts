import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgPublicMemberCheck(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const org = context.getNodeParameter('orgName', i) as string;
	const username = context.getNodeParameter('username', i) as string;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/orgs/${org}/public_members/${username}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
