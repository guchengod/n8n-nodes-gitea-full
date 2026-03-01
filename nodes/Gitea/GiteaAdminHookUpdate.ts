import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminHookUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const id = context.getNodeParameter('id', i) as number;
	const config = context.getNodeParameter('config', i) as IDataObject;
	const events = context.getNodeParameter('events', i, []) as string[];
	const active = context.getNodeParameter('active', i, true) as boolean;

	const body: IDataObject = {
		config,
		events,
		active,
	};

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/admin/hooks/${id}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
