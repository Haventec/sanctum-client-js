import {HttpService} from "@haventec/common-js";
import {Wallet} from "./model/wallet";
import {AuditEntry} from "./model/auditentry";

export class WalletService {
    private basePathSw: string;
    private basePathTp: string;
    private listUrl = '/admin/keystore/';
    private searchIdUrl = '/searchbyid/';
    private searchUsernameUrl = '/searchbyusername/';
    private createUrl = '/keystore/register';
    private getcredentialsUrl = '/keystore/getcredentials';
    private changelockstatusUrl = '/admin/keystore/changelockstatus';
    private disableUrl = '/admin/keystore/disable';

    private http: HttpService;

    constructor(
        public domainUrlSw: string,
        public domainUrlTp: string) {
        this.http = new HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }

    list(applicationUUID: string, userId, from: number, take: number) {

        let url = this.basePathSw + this.listUrl + applicationUUID + '/' + userId + "?size=" + take + "&page=" + from;

        return this.http.get(url);
    }

    searchById(appId: string, id: string) {

        let url = this.basePathSw + this.listUrl + appId + this.searchIdUrl + id;

        return this.http.get(url);
    }

    searchByUsername(appId: string, username: string) {

        let url = this.basePathSw + this.listUrl + appId + this.searchUsernameUrl + username;

        return this.http.get(url);
    }

    create(apiKey: string, username: string, tenantUUID: string, applicationUUID: string, walletName: string, cred: string,
            fonts: Set<string>, osType: string, browserType: string, browserVersion: string ) {

        let url = this.basePathSw + this.createUrl;

        return this.http.post(url, {
            apiKey: apiKey,
            username: username,
            tenantUUID: tenantUUID,
            applicationUUID: applicationUUID,
            walletName: walletName,
            cred: cred,
            fonts: fonts,
            osType: osType,
            browserType: browserType,
            browserVersion: browserVersion
        });
    }


    changelockstatus(appId: string, id: string, locked: boolean) {

        let url = this.basePathSw + this.changelockstatusUrl;

        return this.http.post(url, {applicationUUID: appId, id: id, lock: !locked});
    }

    disable(appId: string, id: string) {

        let url = this.basePathSw + this.disableUrl;

        return this.http.post(url, {applicationUUID: appId, id: id});
    }
}
