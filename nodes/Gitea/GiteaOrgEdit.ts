import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgEdit(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const org = context.getNodeParameter('orgName', i) as string;
	const description = context.getNodeParameter('description', i, '') as string;
	const website = context.getNodeParameter('website', i, '') as string;
	const location = context.getNodeParameter('location', i, '') as string;

	const body: IDataObject = {};
	if (description) body.description = description;
	if (website) body.website = website;
	if (location) body.location = location;

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/orgs/${org}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
