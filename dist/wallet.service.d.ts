export declare class WalletService {
    domainUrlSw: string;
    domainUrlTp: string;
    private basePathSw;
    private basePathTp;
    private listUrl;
    private searchIdUrl;
    private searchUsernameUrl;
    private createUrl;
    private getcredentialsUrl;
    private changelockstatusUrl;
    private disableUrl;
    private http;
    private localDataService;
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(applicationUUID: string, userId: any, from: number, take: number): Promise<{}>;
    searchById(appId: string, id: string): Promise<{}>;
    searchByUsername(appId: string, username: string): Promise<{}>;
    create(apiKey: string, username: string, tenantUUID: string, applicationUUID: string, walletName: string, cred: string, fonts: Set<string>, osType: string, browserType: string, browserVersion: string): Promise<{}>;
    process(apiKey: string, eCred: string, fonts: Set<string>, osType: string, browserType: string, browserVersion: string): Promise<{}>;
    changelockstatus(appId: string, id: string, locked: boolean): Promise<{}>;
    disable(appId: string, id: string): Promise<{}>;
}
