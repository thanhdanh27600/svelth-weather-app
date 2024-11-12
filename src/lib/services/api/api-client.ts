type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestConfig {
	method?: RequestMethod;
	headers?: HeadersInit;
	body?: BodyInit;
}

export class ApiError extends Error {
	constructor(public status: number, message: string) {
		super(message);
	}
}

export async function apiClient<T>(
	endpoint: string,
	config: RequestConfig = {}
): Promise<T> {
	const response = await fetch(endpoint, {
		method: config.method || "GET",
		headers: config.headers,
		body: config.body,
	});

	if (!response.ok) {
		throw new ApiError(
			response.status,
			`HTTP error! status: ${response.status}`
		);
	}

	return response.json();
}
