"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_js_1 = require("@haventec/common-js");
class AuditEntryService {
    constructor(domainUrlSw, domainUrlTp) {
        this.domainUrlSw = domainUrlSw;
        this.domainUrlTp = domainUrlTp;
        this.listUrl = '/admin/audit';
        this.searchApplicationUrl = '/admin/audit/searchbyapplication/';
        this.searchTenantUrl = '/admin/audit/searchbytenant/';
        this.searchUdidUrl = '/admin/audit/searchbyudid/';
        this.searchUsernameUrl = '/admin/audit/searchbyusername/';
        this.searchDaterangeUrl = '/admin/audit/searchbydaterange/';
        this.http = new common_js_1.HttpService();
        this.localDataService = new common_js_1.LocalDataService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(from, take) {
        var url = this.basePathSw + this.listUrl + "?size=" + take + "&page=" + from;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByApplication(applicationUUID) {
        var url = this.basePathSw + this.searchApplicationUrl + applicationUUID;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByTenant(tenantUUID) {
        var url = this.basePathSw + this.searchTenantUrl + tenantUUID;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByUdid(applicationUUID, udid) {
        var url = this.basePathSw + this.searchUdidUrl + applicationUUID + '/' + udid;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByUsername(applicationUUID, username) {
        var url = this.basePathSw + this.searchUsernameUrl + applicationUUID + '/' + username;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByDaterange(applicationUUID, from, to) {
        var url = this.basePathSw + this.searchDaterangeUrl + applicationUUID + '?from=' + from + '&to=' + to;
        return this.http.get(url, this.localDataService.getToken());
    }
}
exports.AuditEntryService = AuditEntryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXRlbnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYXVkaXRlbnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBRWxFO0lBYUksWUFDVyxXQUFtQixFQUNuQixXQUFtQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVp0QixZQUFPLEdBQUcsY0FBYyxDQUFDO1FBQ3pCLHlCQUFvQixHQUFHLG1DQUFtQyxDQUFDO1FBQzNELG9CQUFlLEdBQUcsOEJBQThCLENBQUM7UUFDakQsa0JBQWEsR0FBRyw0QkFBNEIsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxnQ0FBZ0MsQ0FBQztRQUNyRCx1QkFBa0IsR0FBRyxpQ0FBaUMsQ0FBQztRQVEzRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDRCQUFnQixFQUFFLENBQUM7UUFFL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUUzQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRTdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELG1CQUFtQixDQUFDLGVBQXVCO1FBRXZDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQztRQUV4RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxjQUFjLENBQUMsVUFBa0I7UUFFN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUU5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxZQUFZLENBQUMsZUFBdUIsRUFBRSxJQUFZO1FBRTlDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUU5RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxlQUF1QixFQUFFLFFBQWdCO1FBRXRELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBRXRGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGlCQUFpQixDQUFDLGVBQXVCLEVBQUUsSUFBWSxFQUFFLEVBQVU7UUFFL0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBZSxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUV0RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FFSjtBQWpFRCw4Q0FpRUMifQ==