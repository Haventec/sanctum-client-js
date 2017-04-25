import {Application} from "./application";

export class User {
    constructor(
        public id: string,
        public username: string,
        public locked: boolean,
        public disabled: boolean,
        public applicationUUID: boolean,
        public application: Application)
    {

    }
}