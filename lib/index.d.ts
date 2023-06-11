interface SSEOptions {
	headers?: Record<string, string>;
	payload?: string;
	method?: string;
	withCredentials?: boolean;
}

// The interface for the SSE class
interface SSE {
	INITIALIZING: number;
	CONNECTING: number;
	OPEN: number;
	CLOSED: number;
	FIELD_SEPARATOR: string;
	url: string;
	headers: Record<string, string>;
	payload: string;
	method: string;
	withCredentials: boolean;
	listeners: Record<string, Function[]>;
	xhr: XMLHttpRequest | null;
	readyState: number;
	progress: number;
	chunk: string;
	addEventListener(type: string, listener: Function): void;
	removeEventListener(type: string, listener: Function): void;
	dispatchEvent(e: SSEEvent): boolean;
	stream(): void;
	close(): void;
}

// The type for the events dispatched by the SSE class
interface SSEEvent extends CustomEvent {
	id?: string | null;
	data?: string;
	readyState?: number;
	source?: SSE;
}

// The export of the SSE class
declare module "sse" {
	export const SSE: SSE;
}
interface SSEEvent extends CustomEvent {
	id?: string | null;
	data?: string;
	readyState?: number;
}
