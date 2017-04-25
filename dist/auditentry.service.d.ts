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
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(from: number, take: number): any;
    searchByApplication(applicationUUID: string): any;
    searchByTenant(tenantUUID: string): any;
    searchByUdid(applicationUUID: string, udid: string): any;
    searchByUsername(applicationUUID: string, username: string): any;
    searchByDaterange(applicationUUID: string, from: string, to: string): any;
}
