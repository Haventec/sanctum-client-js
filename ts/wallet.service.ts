import {HttpService, LocalDataService} from "@haventec/common-js";
import {Wallet} from "./model/wallet";
import {AuditEntry} from "./model/auditentry";

export class WalletService {
    private baseUrl: string;
    private listUrl = '/admin/keystore/';
    private searchIdUrl = '/searchbyid/';
    private searchUsernameUrl = '/searchbyusername/';
    private registerUrl = '/keystore/register';
    private getcredentialsUrl = '/keystore/getcredentials';
    private changelockstatusUrl = '/admin/keystore/changelockstatus';
    private disableUrl = '/admin/keystore/disable';

    private http: HttpService;
    private localDataService: LocalDataService;

    constructor(
        public domainUrlSw: string) {
        this.http = new HttpService();
        this.localDataService = new LocalDataService();
        this.baseUrl = domainUrlSw;
    }

    list(applicationUUID: string, userId, from: number, take: number) {

        let url = this.baseUrl + this.listUrl + applicationUUID + '/' + userId + "?size=" + take + "&page=" + from;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchById(appId: string, id: string) {

        let url = this.baseUrl + this.listUrl + appId + this.searchIdUrl + id;

        return this.http.get(url, this.localDataService.getToken());
    }

    searchByUsername(appId: string, username: string) {

        let url = this.baseUrl + this.listUrl + appId + this.searchUsernameUrl + username;

        return this.http.get(url, this.localDataService.getToken());
    }

    register(apiKey: string, username: string, applicationUUID: string, walletName: string, cred: string,
            fonts: Set<string>, osType: string, browserType: string, browserVersion: string ) {

        let url = this.baseUrl + this.registerUrl;

        return this.http.postNoAuth(url, {
            apiKey: apiKey,
            username: username,
            applicationUUID: applicationUUID,
            walletName: walletName,
            cred: cred,
            fonts: fonts,
            osType: osType,
            browserType: browserType,
            browserVersion: browserVersion
        });
    }

    transact(apiKey: string, eCred: string, applicationUUID: string, walletId: string,
           fonts: Set<string>, osType: string, browserType: string, browserVersion: string ) {

        let url = this.baseUrl + this.getcredentialsUrl + "/" + applicationUUID + "/" + walletId;

        return this.http.postNoAuth(url, {
            apiKey: apiKey,
            eCred: eCred,
            fonts: fonts,
            osType: osType,
            browserType: browserType,
            browserVersion: browserVersion
        });
    }

    changelockstatus(appId: string, id: string, locked: boolean) {

        let url = this.baseUrl + this.changelockstatusUrl;

        return this.http.post(url, {applicationUUID: appId, id: id, lock: !locked}, this.localDataService.getToken());
    }

    disable(appId: string, id: string) {

        let url = this.baseUrl + this.disableUrl;

        return this.http.post(url, {applicationUUID: appId, id: id}, this.localDataService.getToken());
    }
}
