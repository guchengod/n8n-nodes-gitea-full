import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeMiscellaneousSigningKeyGpgGet(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/signing-key.gpg`,
		json: false,
	};

	const response = await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
	return { key: response };
}
