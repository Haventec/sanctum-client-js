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
    constructor(domainUrlSw: string, domainUrlTp: string);
    list(from: number, take: number): any;
    searchById(id: string): any;
    searchByUuid(uuid: string): any;
    searchByName(name: string): any;
    create(tenant: Tenant): any;
    update(tenant: Tenant): any;
    changelockstatus(id: string, locked: boolean): any;
    disable(id: string): any;
}
