import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminUserEdit(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const username = context.getNodeParameter('username', i) as string;
	const email = context.getNodeParameter('email', i, '') as string;
	const password = context.getNodeParameter('password', i, '') as string;
	const fullName = context.getNodeParameter('fullName', i, '') as string;
	const isAdmin = context.getNodeParameter('isAdmin', i, false) as boolean;

	const body: IDataObject = {
		admin: isAdmin,
	};
	if (email) body.email = email;
	if (password) body.password = password;
	if (fullName) body.full_name = fullName;

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/admin/users/${username}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
