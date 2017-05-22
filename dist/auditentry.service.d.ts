export declare class AuditEntryService {
    domainUrlSw: string;
    domainUrlTp: string;
    private basePathSw;
    private basePathTp;
    private listUrl;
    private searchApplicationUrl;
    private searchTenantUrl;
    private searchUdidUrl;
    private searchUsernameUrl;
    private searchDaterangeUrl;
    private http;
    private localDataService;
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(from: number, take: number): Promise<{}>;
    searchByApplication(applicationUUID: string): Promise<{}>;
    searchByTenant(tenantUUID: string): Promise<{}>;
    searchByUdid(applicationUUID: string, udid: string): Promise<{}>;
    searchByUsername(applicationUUID: string, username: string): Promise<{}>;
    searchByDaterange(applicationUUID: string, from: string, to: string): Promise<{}>;
}
