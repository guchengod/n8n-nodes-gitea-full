import { IDataObject, IExecuteFunctions, INodeProperties, IHttpRequestOptions } from 'n8n-workflow';

export const giteaRepositoryEditFields: INodeProperties[] = [
	{
		displayName: 'Additional Options',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['repository'],
				operation: ['edit'],
			},
		},
		options: [
			{
				displayName: 'Allow Fast Forward Only Merge',
				name: 'allow_fast_forward_only_merge',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Allow Manual Merge',
				name: 'allow_manual_merge',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Allow Merge Commits',
				name: 'allow_merge_commits',
				type: 'boolean',
				default: false,
			},
			{ displayName: 'Allow Rebase', name: 'allow_rebase', type: 'boolean', default: false },
			{
				displayName: 'Allow Rebase Explicit',
				name: 'allow_rebase_explicit',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Allow Rebase Update',
				name: 'allow_rebase_update',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Allow Squash Merge',
				name: 'allow_squash_merge',
				type: 'boolean',
				default: false,
			},
			{ displayName: 'Archived', name: 'archived', type: 'boolean', default: false },
			{
				displayName: 'Autodetect Manual Merge',
				name: 'autodetect_manual_merge',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Default Allow Maintainer Edit',
				name: 'default_allow_maintainer_edit',
				type: 'boolean',
				default: false,
			},
			{ displayName: 'Default Branch', name: 'default_branch', type: 'string', default: '' },
			{
				displayName: 'Default Delete Branch After Merge',
				name: 'default_delete_branch_after_merge',
				type: 'boolean',
				default: false,
			},
			{ displayName: 'Description', name: 'description', type: 'string', default: '' },
			{ displayName: 'Enable Prune', name: 'enable_prune', type: 'boolean', default: false },
			{ displayName: 'Mirror Interval', name: 'mirror_interval', type: 'string', default: '' },
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'New name for the repository',
			},
			{ displayName: 'Private', name: 'private', type: 'boolean', default: false },
			{ displayName: 'Projects Mode', name: 'projects_mode', type: 'string', default: '' },
			{ displayName: 'Template', name: 'template', type: 'boolean', default: false },
			{ displayName: 'Website', name: 'website', type: 'string', default: '' },
		],
	},
];

export async function executeRepositoryEdit(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const owner = context.getNodeParameter('owner', i) as string;
	const repo = context.getNodeParameter('repo', i) as string;
	const additionalFields = context.getNodeParameter('additionalFields', i) as IDataObject;

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		body: { ...additionalFields }, // 将收集到的字段全部放到 body
		url: `${baseUrl}/api/v1/repos/${owner}/${repo}`,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
