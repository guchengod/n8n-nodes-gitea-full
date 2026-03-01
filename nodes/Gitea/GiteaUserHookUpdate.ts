import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function executeUserHookUpdate(
	context: IExecuteFunctions,
	i: number,
	baseUrl: string,
): Promise<unknown> {
	const id = context.getNodeParameter('id', i) as number;
	const type = context.getNodeParameter('type', i) as string;
	const config = context.getNodeParameter('config', i) as IDataObject;
	const events = context.getNodeParameter('events', i) as string[]; // optional
	const active = context.getNodeParameter('active', i, true) as boolean; // optional

	const body: IDataObject = {
		type,
		config,
		active,
	};
	if (events && events.length > 0) {
		body.events = events;
	}

	const options: IHttpRequestOptions = {
		method: 'PATCH',
		url: `${baseUrl}/api/v1/user/hooks/${id}`,
		body,
		json: true,
	};

	return await context.helpers.httpRequestWithAuthentication.call(context, 'giteaApi', options);
}
