import {HttpService} from "@haventec/common";
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

    constructor(
        public domainUrlSw: string,
        public domainUrlTp: string) {
        this.http = new HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }

    list(appId: string, from: number, take: number) {

        var url = this.basePathSw + this.listUrl + appId + "?size=" + take + "&page=" + from;

        return this.http.get(url);
    }

    searchById(appId: string, id: string) {

        var url = this.basePathSw + this.listUrl + appId + this.searchIdUrl + id;

        return this.http.get(url);
    }

    searchByUsername(appId: string, username: string) {

        var url = this.basePathSw + this.listUrl + appId + this.searchUsernameUrl + username;

        return this.http.get(url);
    }

    changelockstatus(appId: string, id: string, locked: boolean) {

        var url = this.basePathSw + this.listUrl + this.changelockstatusUrl;

        return this.http.post(url, {applicationUUID: appId, id: id, lock: !locked});
    }

    disable(appId: string, id: string) {

        var url = this.basePathSw + this.listUrl + this.disableUrl;

        return this.http.post(url, {applicationUUID: appId, id: id});
    }
}
