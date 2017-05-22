import {HttpService, LocalDataService} from "@haventec/common-js";
import {Application} from "./model/application";

export class ApplicationService {
    private basePathSw: string;
    private basePathTp: string;

    private listUrl = '/admin/application';
    private searchIdUrl = '/admin/application/searchbyid/';
    private searchUuidUrl = '/admin/application/searchbyuuid/';
    private searchTenantUuidUrl = '/admin/application/tenant/searchbyuuid/';
    private createUrl = '/admin/application/create';
    private updateUrl = '/admin/application/update';
    private changelockstatusUrl = '/admin/application/changelockstatus';
    private disableUrl = '/admin/application/disable';

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

        var url = this.basePathSw + this.listUrl + "?size=" + take + "&page=" + from;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchById(id: string) {

        var url = this.basePathSw + this.searchIdUrl + id;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByUuid(name: string) {

        var url = this.basePathSw + this.searchUuidUrl + name;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByTenantUUID(tenantUUID: string) {

        var url = this.basePathSw + this.searchTenantUuidUrl + tenantUUID;

        return this.http.get(url, this.localDataService.getToken());
    }

    create(application: Application, tenantUUID: string) {

        var url = this.basePathSw + this.createUrl;

        return this.http.post(url, {name: application.name, description: application.description, tenantUUID: tenantUUID}, this.localDataService.getToken());
    }

    update(application: Application) {

        var url = this.basePathSw + this.updateUrl;

        return this.http.post(url, application, this.localDataService.getToken());
    }

    changelockstatus(id: string, locked: boolean) {

        var url = this.basePathSw + this.changelockstatusUrl;

        return this.http.post(url, {id: id, lock: !locked}, this.localDataService.getToken());
    }

    disable(id: string) {

        var url = this.basePathSw + this.disableUrl;

        return this.http.post(url, {id: id}, this.localDataService.getToken());
    }
}
