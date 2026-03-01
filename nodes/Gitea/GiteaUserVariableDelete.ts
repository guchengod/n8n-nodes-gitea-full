import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserVariableDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const variableName = context.getNodeParameter('variableName', i) as string;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/user/actions/variables/${variableName}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
