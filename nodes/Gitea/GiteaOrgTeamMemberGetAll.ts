import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgTeamMemberGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const teamId = context.getNodeParameter('teamId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/teams/${teamId}/members`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
