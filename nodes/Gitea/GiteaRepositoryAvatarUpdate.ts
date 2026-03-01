import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeRepositoryAvatarUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const image = context.getNodeParameter('image', i) as string; // base64 encoded image

	const body: IDataObject = {
		image,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/avatar`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
