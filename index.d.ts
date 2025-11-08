declare module '@apiverve/rsstojson' {
  export interface rsstojsonOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface rsstojsonResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class rsstojsonWrapper {
    constructor(options: rsstojsonOptions);

    execute(callback: (error: any, data: rsstojsonResponse | null) => void): Promise<rsstojsonResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: rsstojsonResponse | null) => void): Promise<rsstojsonResponse>;
    execute(query?: Record<string, any>): Promise<rsstojsonResponse>;
  }
}
