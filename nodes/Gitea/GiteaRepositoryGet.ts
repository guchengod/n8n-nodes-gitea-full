import { IExecuteFunctions, INodeProperties, IHttpRequestOptions } from 'n8n-workflow';

// 1. 导出 Get 接口的专属 UI 参数 (此处已清空，因为 owner 和 repo 已在 Gitea.node.ts 中全局定义)
export const giteaRepositoryGetFields: INodeProperties[] = [];

// 2. 导出 Get 接口专属的执行逻辑
export async function executeRepositoryGet(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	// 获取用户填写的 owner 和 repo 参数
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;

	// 配置 HTTP 请求 [1]
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}`,
		json: true,
	};

	// 执行请求并返回结果
	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
