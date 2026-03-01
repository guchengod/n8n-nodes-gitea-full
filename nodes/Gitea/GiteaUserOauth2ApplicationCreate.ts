import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserOauth2ApplicationCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const name = context.getNodeParameter('name', i) as string;
	const redirectUris = context.getNodeParameter('redirectUris', i) as string[];

	const body: IDataObject = {
		name,
		redirect_uris: redirectUris,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/user/applications/oauth2`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
