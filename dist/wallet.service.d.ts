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
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(applicationUUID: string, userId: any, from: number, take: number): any;
    searchById(appId: string, id: string): any;
    searchByUsername(appId: string, username: string): any;
    create(apiKey: string, username: string, tenantUUID: string, applicationUUID: string, walletName: string, cred: string, fonts: Set<string>, osType: string, browserType: string, browserVersion: string): any;
    changelockstatus(appId: string, id: string, locked: boolean): any;
    disable(appId: string, id: string): any;
}
