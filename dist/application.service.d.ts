import { Application } from "./model/application";
export declare class ApplicationService {
    domainUrlSw: string;
    domainUrlTp: string;
    private basePathSw;
    private basePathTp;
    private listUrl;
    private searchIdUrl;
    private searchUuidUrl;
    private searchTenantUuidUrl;
    private createUrl;
    private updateUrl;
    private changelockstatusUrl;
    private disableUrl;
    private http;
    private localDataService;
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(from: number, take: number): Promise<{}>;
    searchById(id: string): Promise<{}>;
    searchByUuid(name: string): Promise<{}>;
    searchByTenantUUID(tenantUUID: string): Promise<{}>;
    create(application: Application, tenantUUID: string): Promise<{}>;
    update(application: Application): Promise<{}>;
    changelockstatus(id: string, locked: boolean): Promise<{}>;
    disable(id: string): Promise<{}>;
}
