"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_js_1 = require("@haventec/common-js");
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
        this.http = new common_js_1.HttpService();
        this.localDataService = new common_js_1.LocalDataService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    searchByType(transactionType, from, take) {
        let url = this.basePathSw + this.rootUrl + this.searchByTypeUrl
            + transactionType + "?size=" + take + "&page=" + from;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByTypeAndApp(transactionType, applicationUUID) {
        let url = this.basePathSw + this.rootUrl + this.searchByTypeAndAppUrl + transactionType + "/" + applicationUUID;
        return this.http.get(url, this.localDataService.getToken());
    }
    delete(applicationUUID, udid) {
        let url = this.basePathSw + this.deleteUrl;
        return this.http.post(url, { applicationUUID: applicationUUID, udid: udid }, this.localDataService.getToken());
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
        }, this.localDataService.getToken());
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
        }, this.localDataService.getToken());
    }
}
exports.OfflineService = OfflineService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvb2ZmbGluZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBR2xFO0lBYUksWUFDVyxXQUFtQixFQUNuQixXQUFtQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVp0QixZQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFDNUIsY0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDbkMsMEJBQXFCLEdBQUcsOEJBQThCLENBQUM7UUFDdkQsZ0JBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLG1CQUFtQixDQUFDO1FBUXRDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx1QkFBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksNEJBQWdCLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRU0sWUFBWSxDQUFDLGVBQXVCLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFFbkUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlO2NBQ3pELGVBQWUsR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sa0JBQWtCLENBQUMsZUFBdUIsRUFBRSxlQUF1QjtRQUV0RSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGVBQWUsR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO1FBRWhILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUF1QixFQUFFLElBQVk7UUFFL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQWdCLEVBQUUsTUFBYyxFQUFFLGVBQXVCLEVBQUUsVUFBa0IsRUFBRSxJQUFZLEVBQ2xHLGVBQXVCLEVBQUUsa0JBQTBCO1FBRXhELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUU3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsZUFBZSxFQUFFLGVBQWU7WUFDaEMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsSUFBSSxFQUFFLElBQUk7WUFDVixlQUFlLEVBQUUsZUFBZTtZQUNoQyxrQkFBa0IsRUFBRSxrQkFBa0I7U0FDekMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sUUFBUSxDQUFDLGVBQXVCLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxlQUF1QixFQUFFLFNBQWlCLEVBQUUsR0FBVztRQUUxSCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUN0QixlQUFlLEVBQUUsZUFBZTtZQUNoQyxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJO1lBQ1YsZUFBZSxFQUFFLGVBQWU7WUFDaEMsU0FBUyxFQUFFLFNBQVM7WUFDcEIsR0FBRyxFQUFFLEdBQUc7U0FDWCxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FFSjtBQTNFRCx3Q0EyRUMifQ==