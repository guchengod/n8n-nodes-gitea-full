import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserOauth2ApplicationUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const id = context.getNodeParameter('id', i) as number;
	const name = context.getNodeParameter('name', i) as string;
	const redirectUris = context.getNodeParameter('redirectUris', i) as string[];
	const clientSecret = context.getNodeParameter('clientSecret', i, '') as string; // optional, for regenerating

	const body: IDataObject = {
		name,
		redirect_uris: redirectUris,
	};
	if (clientSecret) {
		body.client_secret = clientSecret;
	}

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/user/applications/oauth2/${id}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
