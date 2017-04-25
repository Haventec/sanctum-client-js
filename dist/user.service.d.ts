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
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(appId: string, from: number, take: number): any;
    searchById(appId: string, id: string): any;
    searchByUsername(appId: string, username: string): any;
    changelockstatus(appId: string, id: string, locked: boolean): any;
    disable(appId: string, id: string): any;
}
