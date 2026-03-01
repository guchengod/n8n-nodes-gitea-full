import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgTeamCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const org = context.getNodeParameter('orgName', i) as string;
	const name = context.getNodeParameter('name', i) as string;
	const description = context.getNodeParameter('description', i, '') as string;
	const permission = context.getNodeParameter('permission', i, 'read') as string;
	const units = context.getNodeParameter('units', i, []) as string[];

	const body: IDataObject = {
		name,
		description,
		permission,
		units,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/orgs/${org}/teams`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
