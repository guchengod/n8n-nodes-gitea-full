import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeMiscellaneousGitignoreGet(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const name = context.getNodeParameter('name', i) as string;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/gitignore/templates/${name}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
