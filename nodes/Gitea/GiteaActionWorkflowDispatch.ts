import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionWorkflowDispatch(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const workflowId = context.getNodeParameter('workflowId', i) as string;
	const ref = context.getNodeParameter('ref', i) as string;
	const inputs = context.getNodeParameter('inputs', i, {}) as IDataObject;

	const body: IDataObject = {
		ref,
	};
	if (Object.keys(inputs).length > 0) {
		body.inputs = inputs;
	}

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
