import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeMiscellaneousGitignoreGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/gitignore/templates`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
