import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionJobLogDownload(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const jobId = context.getNodeParameter('jobId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/jobs/${jobId}/log`,
		json: false, // It returns a file or plain text
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
