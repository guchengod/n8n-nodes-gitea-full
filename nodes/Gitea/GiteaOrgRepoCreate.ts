import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeOrgRepoCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const org = context.getNodeParameter('orgName', i) as string;
	const name = context.getNodeParameter('name', i) as string;
	const description = context.getNodeParameter('description', i, '') as string;
	const isPrivate = context.getNodeParameter('isPrivate', i, false) as boolean;

	const body: IDataObject = {
		name,
		description,
		private: isPrivate,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/orgs/${org}/repos`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
