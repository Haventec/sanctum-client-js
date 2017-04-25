import {Wallet} from "./wallet";

export class Offline {
    constructor(
        public id: string,
        public primeKey: string,
        public transactionType: number,
        public transactionDetails: number,
        public walletKey: Wallet
    )
    {

    }
}
