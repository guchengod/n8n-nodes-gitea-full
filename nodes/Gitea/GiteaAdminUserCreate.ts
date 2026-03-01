import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminUserCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const username = context.getNodeParameter('username', i) as string;
	const email = context.getNodeParameter('email', i) as string;
	const password = context.getNodeParameter('password', i) as string;
	const mustChangePassword = context.getNodeParameter('mustChangePassword', i, false) as boolean;
	const sendNotify = context.getNodeParameter('sendNotify', i, false) as boolean;

	const body: IDataObject = {
		username,
		email,
		password,
		must_change_password: mustChangePassword,
		send_notify: sendNotify,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/admin/users`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
