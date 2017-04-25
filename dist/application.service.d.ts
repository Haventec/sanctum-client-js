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
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(from: number, take: number): any;
    searchById(id: string): any;
    searchByUuid(name: string): any;
    searchByTenantUUID(tenantUUID: string): any;
    create(application: Application, tenantUUID: string): any;
    update(application: Application): any;
    changelockstatus(id: string, locked: boolean): any;
    disable(id: string): any;
}
