import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeMiscellaneousMarkdownRawRender(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const text = context.getNodeParameter('text', i) as string;

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/markdown/raw`,
		body: text,
		headers: {
			'Content-Type': 'text/plain',
		},
		json: false, // It returns raw string (HTML)
	};

	const response = await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
	return { html: response };
}
