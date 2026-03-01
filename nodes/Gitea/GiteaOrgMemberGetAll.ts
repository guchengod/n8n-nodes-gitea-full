import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgMemberGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const org = context.getNodeParameter('orgName', i) as string;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/orgs/${org}/members`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
