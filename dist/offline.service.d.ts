export declare class OfflineService {
    domainUrlSw: string;
    domainUrlTp: string;
    private basePathSw;
    private basePathTp;
    private rootUrl;
    private deleteUrl;
    private searchByTypeUrl;
    private searchByTypeAndAppUrl;
    private registerUrl;
    private transactUrl;
    private http;
    constructor(domainUrlSw: string, domainUrlTp: string);
    searchByType(transactionType: string, from: number, take: number): any;
    searchByTypeAndApp(transactionType: string, applicationUUID: string): any;
    delete(applicationUUID: string, udid: string): any;
    register(username: string, apiKey: string, applicationUUID: string, walletName: string, cred: string, transactionType: number, transactionDetails: number): any;
    transact(applicationUUID: string, apiKey: string, udid: string, transactionType: number, publicPem: string, pin: number): any;
}
