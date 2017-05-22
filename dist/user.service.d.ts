export declare class UserService {
    domainUrlSw: string;
    domainUrlTp: string;
    private basePathSw;
    private basePathTp;
    private listUrl;
    private searchIdUrl;
    private searchUsernameUrl;
    private changelockstatusUrl;
    private disableUrl;
    private http;
    private localDataService;
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(appId: string, from: number, take: number): Promise<{}>;
    searchById(appId: string, id: string): Promise<{}>;
    searchByUsername(appId: string, username: string): Promise<{}>;
    changelockstatus(appId: string, id: string, locked: boolean): Promise<{}>;
    disable(appId: string, id: string): Promise<{}>;
}
