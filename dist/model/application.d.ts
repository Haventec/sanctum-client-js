export declare class Application {
    id: string;
    name: string;
    description: string;
    uuid: string;
    locked: boolean;
    disabled: boolean;
    tenantUUID: string;
    apiKey: string;
    constructor(id: string, name: string, description: string, uuid: string, locked: boolean, disabled: boolean, tenantUUID: string, apiKey: string);
}
