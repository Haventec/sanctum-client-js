import {User} from "./user";

export class Wallet {
    constructor(
        public id: string,
        public udid: string,
        public walletName: string,
        public symKey: string,
        public iv: string,
        public locked: boolean,
        public disabled: boolean,
        public dateCreated: Date,
        public lastUsed: Date,
        public user: User)
    {

    }
}