"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_js_1 = require("@haventec/common-js");
class UserService {
    constructor(domainUrlSw, domainUrlTp) {
        this.domainUrlSw = domainUrlSw;
        this.domainUrlTp = domainUrlTp;
        this.listUrl = '/admin/users/';
        this.searchIdUrl = '/searchbyid/';
        this.searchUsernameUrl = '/searchbyusername/';
        this.changelockstatusUrl = '/changelockstatus';
        this.disableUrl = '/disable';
        this.http = new common_js_1.HttpService();
        this.localDataService = new common_js_1.LocalDataService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(appId, from, take) {
        var url = this.basePathSw + this.listUrl + appId + "?size=" + take + "&page=" + from;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchById(appId, id) {
        var url = this.basePathSw + this.listUrl + appId + this.searchIdUrl + id;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByUsername(appId, username) {
        var url = this.basePathSw + this.listUrl + appId + this.searchUsernameUrl + username;
        return this.http.get(url, this.localDataService.getToken());
    }
    changelockstatus(appId, id, locked) {
        var url = this.basePathSw + this.listUrl + this.changelockstatusUrl;
        return this.http.post(url, { applicationUUID: appId, id: id, lock: !locked }, this.localDataService.getToken());
    }
    disable(appId, id) {
        var url = this.basePathSw + this.listUrl + this.disableUrl;
        return this.http.post(url, { applicationUUID: appId, id: id }, this.localDataService.getToken());
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBSWxFO0lBWUksWUFDVyxXQUFtQixFQUNuQixXQUFtQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVh0QixZQUFPLEdBQUcsZUFBZSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFRNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSw0QkFBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxJQUFZO1FBRTFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsRUFBVTtRQUVoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXpFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUU1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFFckYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLEVBQVUsRUFBRSxNQUFlO1FBRXZELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxFQUFVO1FBRTdCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNuRyxDQUFDO0NBQ0o7QUF2REQsa0NBdURDIn0=