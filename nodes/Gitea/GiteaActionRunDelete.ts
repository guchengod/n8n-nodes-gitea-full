import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeActionRunDelete(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	// 直接从上下文提取全局配置的路径参数
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const runId = context.getNodeParameter('run_id', i) as string;

	const options: IHttpRequestOptions = {
		method: 'DELETE',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}/actions/runs/${runId}`,
		json: true,
	};

	// 某些 Delete 请求可能无返回体，包裹一个默认成功响应
	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}