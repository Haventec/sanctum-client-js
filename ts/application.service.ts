import {HttpService} from "@haventec/common-js";
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

    constructor(
        public domainUrlSw: string,
        public domainUrlTp: string) {
        this.http = new HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }

    list(from: number, take: number) {

        var url = this.basePathSw + this.listUrl + "?size=" + take + "&page=" + from;

        return this.http.get(url);
    }

    searchById(id: string) {

        var url = this.basePathSw + this.searchIdUrl + id;

        return this.http.get(url);
    }

    searchByUuid(name: string) {

        var url = this.basePathSw + this.searchUuidUrl + name;

        return this.http.get(url);
    }

    searchByTenantUUID(tenantUUID: string) {

        var url = this.basePathSw + this.searchTenantUuidUrl + tenantUUID;

        return this.http.get(url);
    }

    create(application: Application, tenantUUID: string) {

        var url = this.basePathSw + this.createUrl;

        return this.http.post(url, {name: application.name, description: application.description, tenantUUID: tenantUUID});
    }

    update(application: Application) {

        var url = this.basePathSw + this.updateUrl;

        return this.http.post(url, application);
    }

    changelockstatus(id: string, locked: boolean) {

        var url = this.basePathSw + this.changelockstatusUrl;

        return this.http.post(url, {id: id, lock: !locked});
    }

    disable(id: string) {

        var url = this.basePathSw + this.disableUrl;

        return this.http.post(url, {id: id});
    }
}
