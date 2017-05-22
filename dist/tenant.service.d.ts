import { Tenant } from "./model/tenant";
export declare class TenantService {
    domainUrlSw: string;
    domainUrlTp: string;
    private basePathSw;
    private basePathTp;
    private listUrl;
    private searchIdUrl;
    private searchUuidUrl;
    private searchNameUrl;
    private createUrl;
    private updateUrl;
    private changelockstatusUrl;
    private disableUrl;
    private http;
    private localDataService;
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(from: number, take: number): Promise<{}>;
    searchById(id: string): Promise<{}>;
    searchByUuid(uuid: string): Promise<{}>;
    searchByName(name: string): Promise<{}>;
    create(tenant: Tenant): Promise<{}>;
    update(tenant: Tenant): Promise<{}>;
    changelockstatus(id: string, locked: boolean): Promise<{}>;
    disable(id: string): Promise<{}>;
}
