import { User } from "./user";
export declare class Wallet {
    id: string;
    udid: string;
    walletName: string;
    symKey: string;
    iv: string;
    locked: boolean;
    disabled: boolean;
    dateCreated: Date;
    lastUsed: Date;
    user: User;
    constructor(id: string, udid: string, walletName: string, symKey: string, iv: string, locked: boolean, disabled: boolean, dateCreated: Date, lastUsed: Date, user: User);
}
