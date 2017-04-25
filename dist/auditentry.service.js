"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@haventec/common");
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
        this.http = new common_1.HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(from, take) {
        var url = this.basePathSw + this.listUrl + "?size=" + take + "&page=" + from;
        return this.http.get(url);
    }
    searchByApplication(applicationUUID) {
        var url = this.basePathSw + this.searchApplicationUrl + applicationUUID;
        return this.http.get(url);
    }
    searchByTenant(tenantUUID) {
        var url = this.basePathSw + this.searchTenantUrl + tenantUUID;
        return this.http.get(url);
    }
    searchByUdid(applicationUUID, udid) {
        var url = this.basePathSw + this.searchUdidUrl + applicationUUID + '/' + udid;
        return this.http.get(url);
    }
    searchByUsername(applicationUUID, username) {
        var url = this.basePathSw + this.searchUsernameUrl + applicationUUID + '/' + username;
        return this.http.get(url);
    }
    searchByDaterange(applicationUUID, from, to) {
        var url = this.basePathSw + this.searchDaterangeUrl + applicationUUID + '?from=' + from + '&to=' + to;
        return this.http.get(url);
    }
}
exports.AuditEntryService = AuditEntryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXRlbnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvYXVkaXRlbnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTZDO0FBRTdDO0lBWUksWUFDVyxXQUFtQixFQUNuQixXQUFtQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVh0QixZQUFPLEdBQUcsY0FBYyxDQUFDO1FBQ3pCLHlCQUFvQixHQUFHLG1DQUFtQyxDQUFDO1FBQzNELG9CQUFlLEdBQUcsOEJBQThCLENBQUM7UUFDakQsa0JBQWEsR0FBRyw0QkFBNEIsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxnQ0FBZ0MsQ0FBQztRQUNyRCx1QkFBa0IsR0FBRyxpQ0FBaUMsQ0FBQztRQU8zRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksb0JBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBWSxFQUFFLElBQVk7UUFFM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztRQUU3RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG1CQUFtQixDQUFDLGVBQXVCO1FBRXZDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQztRQUV4RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFrQjtRQUU3QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBRTlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsWUFBWSxDQUFDLGVBQXVCLEVBQUUsSUFBWTtRQUU5QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxlQUF1QixFQUFFLFFBQWdCO1FBRXRELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBRXRGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsZUFBdUIsRUFBRSxJQUFZLEVBQUUsRUFBVTtRQUUvRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRXRHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBRUo7QUE5REQsOENBOERDIn0=