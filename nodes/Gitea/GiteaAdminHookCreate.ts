import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeAdminHookCreate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const type = context.getNodeParameter('type', i) as string;
	const config = context.getNodeParameter('config', i) as IDataObject;
	const events = context.getNodeParameter('events', i, []) as string[];
	const active = context.getNodeParameter('active', i, true) as boolean;

	const body: IDataObject = {
		type,
		config,
		events,
		active,
	};

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${baseUrl}/api/v1/admin/hooks`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
