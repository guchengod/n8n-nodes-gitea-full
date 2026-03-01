import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgTeamEdit(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const teamId = context.getNodeParameter('teamId', i) as number;
	const name = context.getNodeParameter('name', i, '') as string;
	const description = context.getNodeParameter('description', i, '') as string;
	const permission = context.getNodeParameter('permission', i, 'read') as string;
	const units = context.getNodeParameter('units', i, []) as string[];

	const body: IDataObject = {};
	if (name) body.name = name;
	if (description) body.description = description;
	if (permission) body.permission = permission;
	if (units) body.units = units;

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/teams/${teamId}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
