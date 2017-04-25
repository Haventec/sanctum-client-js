"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@haventec/common");
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
        this.http = new common_1.HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(applicationUUID, userId, from, take) {
        let url = this.basePathSw + this.listUrl + applicationUUID + '/' + userId + "?size=" + take + "&page=" + from;
        return this.http.get(url);
    }
    searchById(appId, id) {
        let url = this.basePathSw + this.listUrl + appId + this.searchIdUrl + id;
        return this.http.get(url);
    }
    searchByUsername(appId, username) {
        let url = this.basePathSw + this.listUrl + appId + this.searchUsernameUrl + username;
        return this.http.get(url);
    }
    create(apiKey, username, tenantUUID, applicationUUID, walletName, cred, fonts, osType, browserType, browserVersion) {
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
    changelockstatus(appId, id, locked) {
        let url = this.basePathSw + this.changelockstatusUrl;
        return this.http.post(url, { applicationUUID: appId, id: id, lock: !locked });
    }
    disable(appId, id) {
        let url = this.basePathSw + this.disableUrl;
        return this.http.post(url, { applicationUUID: appId, id: id });
    }
}
exports.WalletService = WalletService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy93YWxsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE2QztBQUk3QztJQWFJLFlBQ1csV0FBbUIsRUFDbkIsV0FBbUI7UUFEbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFadEIsWUFBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzdCLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLGNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxzQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxrQ0FBa0MsQ0FBQztRQUN6RCxlQUFVLEdBQUcseUJBQXlCLENBQUM7UUFPM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG9CQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxDQUFDLGVBQXVCLEVBQUUsTUFBTSxFQUFFLElBQVksRUFBRSxJQUFZO1FBRTVELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFOUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLEVBQVU7UUFFaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV6RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUU1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFFckYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsVUFBa0IsRUFBRSxlQUF1QixFQUFFLFVBQWtCLEVBQUUsSUFBWSxFQUM5RyxLQUFrQixFQUFFLE1BQWMsRUFBRSxXQUFtQixFQUFFLGNBQXNCO1FBRW5GLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsZUFBZSxFQUFFLGVBQWU7WUFDaEMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFLFdBQVc7WUFDeEIsY0FBYyxFQUFFLGNBQWM7U0FDakMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELGdCQUFnQixDQUFDLEtBQWEsRUFBRSxFQUFVLEVBQUUsTUFBZTtRQUV2RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsRUFBVTtRQUU3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBM0VELHNDQTJFQyJ9