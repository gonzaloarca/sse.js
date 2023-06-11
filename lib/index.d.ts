// The interface for the SSE instance
interface SSEInstance {
	INITIALIZING: number;
	CONNECTING: number;
	OPEN: number;
	CLOSED: number;
	FIELD_SEPARATOR: string;
	url: string;
	headers: Record<string, unknown>;
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

// The interface for the options in the SSE constructor
interface SSEOptions {
	headers?: Record<string, unknown>;
	payload?: string;
	method?: string;
	withCredentials?: boolean;
}

// The type for the SSE constructor function
type SSEConstructor = new (url: string, options?: SSEOptions) => SSEInstance;

// The declaration for the module
declare const SSE: SSEConstructor;

declare module "sse" {
	export = SSE;
}

interface SSEEvent extends CustomEvent {
	id?: string | null;
	data?: string;
	readyState?: number;
}
