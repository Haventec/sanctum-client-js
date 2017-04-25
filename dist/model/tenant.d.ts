export declare class Tenant {
    id: string;
    uuid: string;
    name: string;
    email: string;
    locked: boolean;
    disabled: boolean;
    platformAdmin: boolean;
    constructor(id: string, uuid: string, name: string, email: string, locked: boolean, disabled: boolean, platformAdmin: boolean);
}
