import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionArtifactDownload(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const artifactId = context.getNodeParameter('artifactId', i) as number;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/artifacts/${artifactId}/download`,
		json: false, // It returns a redirect to a file download
	};

	// It may return binary data, so we need to handle it properly.
	// The helper might handle the redirect and return the final response.
	// If the user wants the binary data, this should work.
	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
