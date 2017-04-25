
export class Application {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public uuid: string,
        public locked: boolean,
        public disabled: boolean,
        public tenantUUID: string,
        public apiKey: string
    )
    {

    }
}
