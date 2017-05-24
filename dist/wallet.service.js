"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_js_1 = require("@haventec/common-js");
class WalletService {
    constructor(domainUrlSw, domainUrlTp) {
        this.domainUrlSw = domainUrlSw;
        this.domainUrlTp = domainUrlTp;
        this.listUrl = '/admin/keystore/';
        this.searchIdUrl = '/searchbyid/';
        this.searchUsernameUrl = '/searchbyusername/';
        this.createUrl = '/keystore/register';
        this.getcredentialsUrl = '/keystore/getcredentials';
        this.changelockstatusUrl = '/admin/keystore/changelockstatus';
        this.disableUrl = '/admin/keystore/disable';
        this.http = new common_js_1.HttpService();
        this.localDataService = new common_js_1.LocalDataService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(applicationUUID, userId, from, take) {
        let url = this.basePathSw + this.listUrl + applicationUUID + '/' + userId + "?size=" + take + "&page=" + from;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchById(appId, id) {
        let url = this.basePathSw + this.listUrl + appId + this.searchIdUrl + id;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByUsername(appId, username) {
        let url = this.basePathSw + this.listUrl + appId + this.searchUsernameUrl + username;
        return this.http.get(url, this.localDataService.getToken());
    }
    create(apiKey, username, tenantUUID, applicationUUID, walletName, cred, fonts, osType, browserType, browserVersion) {
        let url = this.basePathSw + this.createUrl;
        return this.http.postNoAuth(url, {
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
    process(apiKey, eCred, fonts, osType, browserType, browserVersion) {
        let url = this.basePathSw + this.createUrl;
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
        let url = this.basePathSw + this.changelockstatusUrl;
        return this.http.post(url, { applicationUUID: appId, id: id, lock: !locked }, this.localDataService.getToken());
    }
    disable(appId, id) {
        let url = this.basePathSw + this.disableUrl;
        return this.http.post(url, { applicationUUID: appId, id: id }, this.localDataService.getToken());
    }
}
exports.WalletService = WalletService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy93YWxsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUlsRTtJQWNJLFlBQ1csV0FBbUIsRUFDbkIsV0FBbUI7UUFEbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFidEIsWUFBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzdCLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLGNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxzQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxrQ0FBa0MsQ0FBQztRQUN6RCxlQUFVLEdBQUcseUJBQXlCLENBQUM7UUFRM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLENBQUMsZUFBdUIsRUFBRSxNQUFNLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFFNUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztRQUU5RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLEVBQVU7UUFFaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV6RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFFNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBRXJGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLGVBQXVCLEVBQUUsVUFBa0IsRUFBRSxJQUFZLEVBQzlHLEtBQWtCLEVBQUUsTUFBYyxFQUFFLFdBQW1CLEVBQUUsY0FBc0I7UUFFbkYsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDN0IsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsVUFBVTtZQUN0QixlQUFlLEVBQUUsZUFBZTtZQUNoQyxVQUFVLEVBQUUsVUFBVTtZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsV0FBVztZQUN4QixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWMsRUFBRSxLQUFhLEVBQzlCLEtBQWtCLEVBQUUsTUFBYyxFQUFFLFdBQW1CLEVBQUUsY0FBc0I7UUFFbEYsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDN0IsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsV0FBVztZQUN4QixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLEVBQVUsRUFBRSxNQUFlO1FBRXZELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsRUFBVTtRQUU3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25HLENBQUM7Q0FDSjtBQTNGRCxzQ0EyRkMifQ==