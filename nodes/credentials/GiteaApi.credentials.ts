import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GiteaApi implements ICredentialType {
	name = 'giteaApi';
	displayName = 'Gitea API';
	// Gitea API 文档地址
	documentationUrl = 'https://docs.gitea.io/en-us/api-usage/';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://gitea.com',
			description: '你的 Gitea 实例的完整地址 (例如: https://gitea.yourdomain.com)',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: '在 Gitea 用户设置 -> 应用 中生成的访问令牌 (Access Token)',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=token {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}/api/v1',
			url: '/user',
		},
	};
	icon = 'file:./icon.svg' as const;
}
