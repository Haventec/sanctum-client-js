export class AuditEntry {
    constructor(
        public id: string,
        public description: string,
        public walletName: string,
        public walletUdid: string,
        public username: string,
        public applicationUUID: string,
        public transactionTime: string
    )
    {

    }
}
