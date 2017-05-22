import {HttpService, LocalDataService} from "@haventec/common-js";
import {Tenant} from "./model/tenant";

export class TenantService {
    private basePathSw: string;
    private basePathTp: string;
    private listUrl = '/admin/tenant';
    private searchIdUrl = '/admin/tenant/searchbyid/';
    private searchUuidUrl = '/admin/tenant/searchbyuuid/';
    private searchNameUrl = '/admin/tenant/searchbyname/';
    private createUrl = '/admin/tenant/create';
    private updateUrl = '/admin/tenant/update';
    private changelockstatusUrl = '/admin/tenant/changelockstatus';
    private disableUrl = '/admin/tenant/disable';

    private http: HttpService;
    private localDataService: LocalDataService;

    constructor(
        public domainUrlSw: string,
        public domainUrlTp: string) {
        this.http = new HttpService();
        this.localDataService = new LocalDataService();

        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }

    list(from: number, take: number) {

        var url = this.basePathTp + this.listUrl + "?size=" + take + "&page=" + from;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchById(id: string) {

        var url = this.basePathTp + this.searchIdUrl + id;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByUuid(uuid: string) {

        var url = this.basePathTp + this.searchUuidUrl + uuid;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByName(name: string) {

        var url = this.basePathTp + this.searchNameUrl + name;

        return this.http.get(url, this.localDataService.getToken());
    }

    create(tenant: Tenant) {

        var url = this.basePathTp + this.createUrl;

        return this.http.post(url, {name: tenant.name, email: tenant.email}, this.localDataService.getToken());
    }

    update(tenant: Tenant) {

        var url = this.basePathTp + this.updateUrl;

        return this.http.post(url, tenant, this.localDataService.getToken());
    }

    changelockstatus(id: string, locked: boolean) {

        var url = this.basePathTp + this.changelockstatusUrl;

        return this.http.post(url, {id: id, lock: !locked}, this.localDataService.getToken());
    }

    disable(id: string) {

        var url = this.basePathTp + this.disableUrl;

        return this.http.post(url, {id: id}, this.localDataService.getToken());
    }
}
