import { IDataObject, IExecuteFunctions, INodeProperties, IHttpRequestOptions } from 'n8n-workflow';
export const giteaMigrateFields: INodeProperties[] = [
	{
		displayName: 'Clone Address (URL)',
		name: 'clone_addr',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['repository'],
				operation: ['migrate'], // 限制仅在 Migrate 操作时显示
			},
		},
		description: '要迁移的原始仓库地址 (例如: https://github.com/owner/repo.git)',
	},
	{
		displayName: 'New Repository Name',
		name: 'repo_name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['repository'],
				operation: ['migrate'],
			},
		},
		description: '在 Gitea 中创建的新仓库名称',
	},
	{
		displayName: 'Service Type',
		name: 'service',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['repository'],
				operation: ['migrate'],
			},
		},
		options: [
			{ name: 'Codebase', value: 'codebase' },
			{ name: 'Codecommit', value: 'codecommit' },
			{ name: 'Git', value: 'git' },
			{ name: 'GitBucket', value: 'gitbucket' },
			{ name: 'Gitea', value: 'gitea' },
			{ name: 'GitHub', value: 'github' },
			{ name: 'GitLab', value: 'gitlab' },
			{ name: 'Gogs', value: 'gogs' },
			{ name: 'OneDev', value: 'onedev' },
		],
		default: 'git',
		description: '原始仓库所在的代码托管平台类型',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['repository'],
				operation: ['migrate'],
			},
		},
		// 已严格按字母 A-Z 排序，消除 ESLint 报错
		options: [
			{
				displayName: 'Auth Password',
				name: 'auth_password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
			},
			{
				displayName: 'Auth Token',
				name: 'auth_token',
				type: 'string',
				typeOptions: { password: true },
				default: '',
			},
			{
				displayName: 'Auth Username',
				name: 'auth_username',
				type: 'string',
				default: '',
			},
			{
				displayName: 'AWS Access Key ID',
				name: 'aws_access_key_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'AWS Secret Access Key',
				name: 'aws_secret_access_key',
				type: 'string',
				typeOptions: { password: true },
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Private',
				name: 'private',
				type: 'boolean',
				default: true,
				description: 'Whether the new repository should be private',
			},
			{
				displayName: 'LFS',
				name: 'lfs',
				type: 'boolean',
				default: false,
				description: 'Whether to migrate LFS files',
			},
			{
				displayName: 'LFS Endpoint',
				name: 'lfs_endpoint',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Migrate Issues',
				name: 'issues',
				type: 'boolean',
				default: true,
				description: 'Whether to migrate issues',
			},
			{
				displayName: 'Migrate Labels',
				name: 'labels',
				type: 'boolean',
				default: true,
				description: 'Whether to migrate labels',
			},
			{
				displayName: 'Migrate Milestones',
				name: 'milestones',
				type: 'boolean',
				default: true,
				description: 'Whether to migrate milestones',
			},
			{
				displayName: 'Migrate Pull Requests',
				name: 'pull_requests',
				type: 'boolean',
				default: true,
				description: 'Whether to migrate pull requests',
			},
			{
				displayName: 'Migrate Releases',
				name: 'releases',
				type: 'boolean',
				default: true,
				description: 'Whether to migrate releases',
			},
			{
				displayName: 'Migrate Wiki',
				name: 'wiki',
				type: 'boolean',
				default: true,
				description: 'Whether to migrate the wiki',
			},
			{
				displayName: 'Mirror',
				name: 'mirror',
				type: 'boolean',
				default: false,
				description: 'Whether to set the repository as a mirror',
			},
			{
				displayName: 'Mirror Interval',
				name: 'mirror_interval',
				type: 'string',
				default: '8h',
			},
			{
				displayName: 'Target Repository Owner',
				name: 'repo_owner',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UID (Deprecated)',
				name: 'uid',
				type: 'number',
				default: 0,
			},
		],
	},
];

// 2. 导出 Migrate 接口专属的执行逻辑
export async function executeMigrate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const clone_addr = context.getNodeParameter('clone_addr', i) as string;
	const repo_name = context.getNodeParameter('repo_name', i) as string;
	const service = context.getNodeParameter('service', i) as string;
	const additionalFields = context.getNodeParameter('additionalFields', i) as IDataObject;

	const body: IDataObject = {
		clone_addr,
		repo_name,
		service,
	};
	Object.assign(body, additionalFields);

	const options: IHttpRequestOptions = {
		method: 'POST',
		body,
		url: `${baseUrl}/api/v1/repos/migrate`,
		json: true,
	};

	// 执行请求并返回
	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
