"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_js_1 = require("@haventec/common-js");
class WalletService {
    constructor(domainUrlSw) {
        this.domainUrlSw = domainUrlSw;
        this.listUrl = '/admin/keystore/';
        this.searchIdUrl = '/searchbyid/';
        this.searchUsernameUrl = '/searchbyusername/';
        this.registerUrl = '/keystore/register';
        this.getcredentialsUrl = '/keystore/getcredentials';
        this.changelockstatusUrl = '/admin/keystore/changelockstatus';
        this.disableUrl = '/admin/keystore/disable';
        this.http = new common_js_1.HttpService();
        this.localDataService = new common_js_1.LocalDataService();
        this.baseUrl = domainUrlSw;
    }
    list(applicationUUID, userId, from, take) {
        let url = this.baseUrl + this.listUrl + applicationUUID + '/' + userId + "?size=" + take + "&page=" + from;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchById(appId, id) {
        let url = this.baseUrl + this.listUrl + appId + this.searchIdUrl + id;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByUsername(appId, username) {
        let url = this.baseUrl + this.listUrl + appId + this.searchUsernameUrl + username;
        return this.http.get(url, this.localDataService.getToken());
    }
    register(apiKey, username, applicationUUID, walletName, cred, fonts, osType, browserType, browserVersion) {
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
    transact(apiKey, eCred, fonts, osType, browserType, browserVersion) {
        let url = this.baseUrl + this.getcredentialsUrl;
        return this.http.postNoAuth(url, {
            apiKey: apiKey,
            eCred: eCred,
            fonts: fonts,
            osType: osType,
            browserType: browserType,
            browserVersion: browserVersion
        });
    }
    changelockstatus(appId, id, locked) {
        let url = this.baseUrl + this.changelockstatusUrl;
        return this.http.post(url, { applicationUUID: appId, id: id, lock: !locked }, this.localDataService.getToken());
    }
    disable(appId, id) {
        let url = this.baseUrl + this.disableUrl;
        return this.http.post(url, { applicationUUID: appId, id: id }, this.localDataService.getToken());
    }
}
exports.WalletService = WalletService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy93YWxsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUlsRTtJQWFJLFlBQ1csV0FBbUI7UUFBbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFadEIsWUFBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzdCLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsMEJBQTBCLENBQUM7UUFDL0Msd0JBQW1CLEdBQUcsa0NBQWtDLENBQUM7UUFDekQsZUFBVSxHQUFHLHlCQUF5QixDQUFDO1FBTzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx1QkFBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksNEJBQWdCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUFDLGVBQXVCLEVBQUUsTUFBTSxFQUFFLElBQVksRUFBRSxJQUFZO1FBRTVELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFM0csTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWEsRUFBRSxFQUFVO1FBRWhDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9B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