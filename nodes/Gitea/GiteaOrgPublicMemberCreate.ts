import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgPublicMemberCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const org = context.getNodeParameter('orgName', i) as string;
	const username = context.getNodeParameter('username', i) as string;

	const options: IHttpRequestOptions = {
		method: 'PUT',
		url: `${baseUrl}/api/v1/orgs/${org}/public_members/${username}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
