import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserGpgKeyVerify(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const fingerprint = context.getNodeParameter('fingerprint', i) as string;

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/user/gpg_keys/${fingerprint}/verify`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
