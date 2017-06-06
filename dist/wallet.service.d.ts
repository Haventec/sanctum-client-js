export declare class WalletService {
    domainUrlSw: string;
    private baseUrl;
    private listUrl;
    private searchIdUrl;
    private searchUsernameUrl;
    private registerUrl;
    private getcredentialsUrl;
    private changelockstatusUrl;
    private disableUrl;
    private http;
    private localDataService;
    constructor(domainUrlSw: string);
    list(applicationUUID: string, userId: any, from: number, take: number): Promise<{}>;
    searchById(appId: string, id: string): Promise<{}>;
    searchByUsername(appId: string, username: string): Promise<{}>;
    register(apiKey: string, username: string, applicationUUID: string, walletName: string, cred: string, fonts: Set<string>, osType: string, browserType: string, browserVersion: string): Promise<{}>;
    transact(apiKey: string, eCred: string, fonts: Set<string>, osType: string, browserType: string, browserVersion: string): Promise<{}>;
    changelockstatus(appId: string, id: string, locked: boolean): Promise<{}>;
    disable(appId: string, id: string): Promise<{}>;
}
