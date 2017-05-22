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
    private localDataService;
    constructor(domainUrlSw: string, domainUrlTp: string);
    searchByType(transactionType: string, from: number, take: number): Promise<{}>;
    searchByTypeAndApp(transactionType: string, applicationUUID: string): Promise<{}>;
    delete(applicationUUID: string, udid: string): Promise<{}>;
    register(username: string, apiKey: string, applicationUUID: string, walletName: string, cred: string, transactionType: number, transactionDetails: number): Promise<{}>;
    transact(applicationUUID: string, apiKey: string, udid: string, transactionType: number, publicPem: string, pin: number): Promise<{}>;
}
