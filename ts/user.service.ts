import {HttpService, LocalDataService} from "@haventec/common-js";
import {User} from "./model/user";
import {AuditEntry} from "./model/auditentry";

export class UserService {
    private basePathSw: string;
    private basePathTp: string;
    private listUrl = '/admin/users/';
    private searchIdUrl = '/searchbyid/';
    private searchUsernameUrl = '/searchbyusername/';
    private changelockstatusUrl = '/changelockstatus';
    private disableUrl = '/disable';

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

    list(appId: string, from: number, take: number) {

        var url = this.basePathSw + this.listUrl + appId + "?size=" + take + "&page=" + from;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchById(appId: string, id: string) {

        var url = this.basePathSw + this.listUrl + appId + this.searchIdUrl + id;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByUsername(appId: string, username: string) {

        var url = this.basePathSw + this.listUrl + appId + this.searchUsernameUrl + username;

        return this.http.get(url, this.localDataService.getToken());
    }

    changelockstatus(appId: string, id: string, locked: boolean) {

        var url = this.basePathSw + this.listUrl + this.changelockstatusUrl;

        return this.http.post(url, {applicationUUID: appId, id: id, lock: !locked}, this.localDataService.getToken());
    }

    disable(appId: string, id: string) {

        var url = this.basePathSw + this.listUrl + this.disableUrl;

        return this.http.post(url, {applicationUUID: appId, id: id}, this.localDataService.getToken());
    }
}
