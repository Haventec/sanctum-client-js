import {HttpService, LocalDataService} from "@haventec/common-js";

export class AuditEntryService {
    private basePathSw: string;
    private basePathTp: string;
    private listUrl = '/admin/audit';
    private searchApplicationUrl = '/admin/audit/searchbyapplication/';
    private searchTenantUrl = '/admin/audit/searchbytenant/';
    private searchUdidUrl = '/admin/audit/searchbyudid/';
    private searchUsernameUrl = '/admin/audit/searchbyusername/';
    private searchDaterangeUrl = '/admin/audit/searchbydaterange/';

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

    searchByApplication(applicationUUID: string) {

        var url = this.basePathSw + this.searchApplicationUrl + applicationUUID;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByTenant(tenantUUID: string) {

        var url = this.basePathSw + this.searchTenantUrl + tenantUUID;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByUdid(applicationUUID: string, udid: string) {

        var url = this.basePathSw + this.searchUdidUrl + applicationUUID + '/' + udid;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByUsername(applicationUUID: string, username: string) {

        var url = this.basePathSw + this.searchUsernameUrl + applicationUUID + '/' + username;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByDaterange(applicationUUID: string, from: string, to: string) {

        var url = this.basePathSw + this.searchDaterangeUrl + applicationUUID + '?from=' + from + '&to=' + to;

        return this.http.get(url, this.localDataService.getToken());
    }

}
