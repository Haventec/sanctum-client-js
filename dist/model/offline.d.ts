import { Wallet } from "./wallet";
export declare class Offline {
    id: string;
    primeKey: string;
    transactionType: number;
    transactionDetails: number;
    walletKey: Wallet;
    constructor(id: string, primeKey: string, transactionType: number, transactionDetails: number, walletKey: Wallet);
}
