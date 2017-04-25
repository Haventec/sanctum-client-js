export class Tenant {
    constructor(
        public id: string,
        public uuid: string,
        public name: string,
        public email: string,
        public locked: boolean,
        public disabled: boolean,
        public platformAdmin: boolean)
    {

    }
}