import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeMiscellaneousMarkdownRender(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const text = context.getNodeParameter('text', i) as string;
	const mode = context.getNodeParameter('mode', i, 'markdown') as string;
	const contextPath = context.getNodeParameter('context', i, '') as string;

	const body: IDataObject = {
		Text: text,
		Mode: mode,
	};
	if (contextPath) body.Context = contextPath;

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/markdown`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
