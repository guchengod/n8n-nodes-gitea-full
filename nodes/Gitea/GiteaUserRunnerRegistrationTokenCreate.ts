import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserRunnerRegistrationTokenCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/user/runners/registration-token`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
