"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@haventec/common");
class OfflineService {
    constructor(domainUrlSw, domainUrlTp) {
        this.domainUrlSw = domainUrlSw;
        this.domainUrlTp = domainUrlTp;
        this.rootUrl = "/admin/offline/";
        this.deleteUrl = "/admin/offline/delete";
        this.searchByTypeUrl = "/searchbytype/";
        this.searchByTypeAndAppUrl = "/searchbytypeandapplication/";
        this.registerUrl = "/offline/register";
        this.transactUrl = "/offline/transact";
        this.http = new common_1.HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    searchByType(transactionType, from, take) {
        let url = this.basePathSw + this.rootUrl + this.searchByTypeUrl
            + transactionType + "?size=" + take + "&page=" + from;
        return this.http.get(url);
    }
    searchByTypeAndApp(transactionType, applicationUUID) {
        let url = this.basePathSw + this.rootUrl + this.searchByTypeAndAppUrl + transactionType + "/" + applicationUUID;
        return this.http.get(url);
    }
    delete(applicationUUID, udid) {
        let url = this.basePathSw + this.deleteUrl;
        return this.http.post(url, { applicationUUID: applicationUUID, udid: udid });
    }
    register(username, apiKey, applicationUUID, walletName, cred, transactionType, transactionDetails) {
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
    transact(applicationUUID, apiKey, udid, transactionType, publicPem, pin) {
        let url = this.basePathSw + this.transactUrl;
        return this.http.post(url, {
            applicationUUID: applicationUUID,
            apiKey: apiKey,
            udid: udid,
            transactionType: transactionType,
            publicPem: publicPem,
            pin: pin
        });
    }
}
exports.OfflineService = OfflineService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvb2ZmbGluZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTZDO0FBRzdDO0lBWUksWUFDVyxXQUFtQixFQUNuQixXQUFtQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVh0QixZQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFDNUIsY0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsMEJBQXFCLEdBQUcsOEJBQThCLENBQUM7UUFDdkQsZ0JBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLG1CQUFtQixDQUFDO1FBT3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvQkFBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVNLFlBQVksQ0FBQyxlQUF1QixFQUFFLElBQVksRUFBRSxJQUFZO1FBRW5FLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZTtjQUN6RCxlQUFlLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRTFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sa0JBQWtCLENBQUMsZUFBdUIsRUFBRSxlQUF1QjtRQUV0RSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGVBQWUsR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO1FBRWhILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQXVCLEVBQUUsSUFBWTtRQUUvQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxlQUF1QixFQUFFLFVBQWtCLEVBQUUsSUFBWSxFQUNsRyxlQUF1QixFQUFFLGtCQUEwQjtRQUV4RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUUsUUFBUTtZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLElBQUksRUFBRSxJQUFJO1lBQ1YsZUFBZSxFQUFFLGVBQWU7WUFDaEMsa0JBQWtCLEVBQUUsa0JBQWtCO1NBQ3pDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxRQUFRLENBQUMsZUFBdUIsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLGVBQXVCLEVBQUUsU0FBaUIsRUFBRSxHQUFXO1FBRTFILElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUU3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ3RCLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUk7WUFDVixlQUFlLEVBQUUsZUFBZTtZQUNoQyxTQUFTLEVBQUUsU0FBUztZQUNwQixHQUFHLEVBQUUsR0FBRztTQUNYLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSjtBQXhFRCx3Q0F3RUMifQ==