import { Application } from "./application";
export declare class User {
    id: string;
    username: string;
    locked: boolean;
    disabled: boolean;
    applicationUUID: boolean;
    application: Application;
    constructor(id: string, username: string, locked: boolean, disabled: boolean, applicationUUID: boolean, application: Application);
}
