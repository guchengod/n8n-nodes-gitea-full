import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executePackageFileGetAll(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const type = context.getNodeParameter('packageType', i) as string;
	const name = context.getNodeParameter('packageName', i) as string;
	const version = context.getNodeParameter('packageVersion', i) as string;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/packages/${owner}/${type}/${name}/${version}/files`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
