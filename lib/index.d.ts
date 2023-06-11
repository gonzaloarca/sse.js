interface SSEOptions {
	headers?: Record<string, string>;
	payload?: string;
	method?: string;
	withCredentials?: boolean;
}

// The interface for the SSE class
interface SSE extends EventSource {
	FIELD_SEPARATOR: string;
	headers: Record<string, string>;
	payload: string;
	method: string;
	listeners: Record<string, Function[]>;
	xhr: XMLHttpRequest | null;
	progress: number;
	chunk: string;
	stream(): void;
}

// The type for the events dispatched by the SSE class
interface SSEEvent extends CustomEvent {
	id?: string | null;
	data?: string;
	readyState?: number;
	source?: SSE;
}

// The export of the SSE class
declare module "sse.js" {
	export const SSE: SSE;
}
interface SSEEvent extends CustomEvent {
	id?: string | null;
	data?: string;
	readyState?: number;
}
