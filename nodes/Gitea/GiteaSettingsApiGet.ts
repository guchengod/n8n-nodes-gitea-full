import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeSettingsApiGet(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/settings/api`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
