import {HttpService} from "@haventec/common";
import {Offline} from "./model/offline";

export class OfflineService {
    private basePathSw: string;
    private basePathTp: string;
    private rootUrl = "/admin/offline/";
    private deleteUrl = "/admin/offline/delete";
    private searchByTypeUrl = "/searchbytype/";
    private searchByTypeAndAppUrl = "/searchbytypeandapplication/";
    private registerUrl = "/offline/register";
    private transactUrl = "/offline/transact";

    private http: HttpService;

    constructor(
        public domainUrlSw: string,
        public domainUrlTp: string) {
        this.http = new HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }

    public searchByType(transactionType: string, from: number, take: number) {

        let url = this.basePathSw + this.rootUrl + this.searchByTypeUrl
            + transactionType + "?size=" + take + "&page=" + from;

        return this.http.get(url);
    }

    public searchByTypeAndApp(transactionType: string, applicationUUID: string) {

        let url = this.basePathSw + this.rootUrl + this.searchByTypeAndAppUrl + transactionType + "/" + applicationUUID;

        return this.http.get(url);
    }

    public delete(applicationUUID: string, udid: string) {

        let url = this.basePathSw + this.deleteUrl;

        return this.http.post(url, {applicationUUID: applicationUUID, udid: udid});
    }

    public register(username: string, apiKey: string, applicationUUID: string, walletName: string, cred: string,
             transactionType: number, transactionDetails: number) {

        let url = this.basePathSw + this.registerUrl;

        return this.http.post(url, {
            username: username,
            apiKey: apiKey,
            applicationUUID: applicationUUID,
            walletName: walletName,
            cred: cred,
            transactionType: transactionType,
            transactionDetails: transactionDetails
        });
    }

    public transact(applicationUUID: string, apiKey: string, udid: string, transactionType: number, publicPem: string, pin: number) {

        let url = this.basePathSw + this.transactUrl;

        return this.http.post(url,{
            applicationUUID: applicationUUID,
            apiKey: apiKey,
            udid: udid,
            transactionType: transactionType,
            publicPem: publicPem,
            pin: pin
        });
    }

}
