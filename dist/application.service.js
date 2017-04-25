"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@haventec/common");
class ApplicationService {
    constructor(domainUrlSw, domainUrlTp) {
        this.domainUrlSw = domainUrlSw;
        this.domainUrlTp = domainUrlTp;
        this.listUrl = '/admin/application';
        this.searchIdUrl = '/admin/application/searchbyid/';
        this.searchUuidUrl = '/admin/application/searchbyuuid/';
        this.searchTenantUuidUrl = '/admin/application/tenant/searchbyuuid/';
        this.createUrl = '/admin/application/create';
        this.updateUrl = '/admin/application/update';
        this.changelockstatusUrl = '/admin/application/changelockstatus';
        this.disableUrl = '/admin/application/disable';
        this.http = new common_1.HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(from, take) {
        var url = this.basePathSw + this.listUrl + "?size=" + take + "&page=" + from;
        return this.http.get(url);
    }
    searchById(id) {
        var url = this.basePathSw + this.searchIdUrl + id;
        return this.http.get(url);
    }
    searchByUuid(name) {
        var url = this.basePathSw + this.searchUuidUrl + name;
        return this.http.get(url);
    }
    searchByTenantUUID(tenantUUID) {
        var url = this.basePathSw + this.searchTenantUuidUrl + tenantUUID;
        return this.http.get(url);
    }
    create(application, tenantUUID) {
        var url = this.basePathSw + this.createUrl;
        return this.http.post(url, { name: application.name, description: application.description, tenantUUID: tenantUUID });
    }
    update(application) {
        var url = this.basePathSw + this.updateUrl;
        return this.http.post(url, application);
    }
    changelockstatus(id, locked) {
        var url = this.basePathSw + this.changelockstatusUrl;
        return this.http.post(url, { id: id, lock: !locked });
    }
    disable(id) {
        var url = this.basePathSw + this.disableUrl;
        return this.http.post(url, { id: id });
    }
}
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2FwcGxpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNkM7QUFHN0M7SUFlSSxZQUNXLFdBQW1CLEVBQ25CLFdBQW1CO1FBRG5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBYnRCLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUMvQixnQkFBVyxHQUFHLGdDQUFnQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsa0NBQWtDLENBQUM7UUFDbkQsd0JBQW1CLEdBQUcseUNBQXlDLENBQUM7UUFDaEUsY0FBUyxHQUFHLDJCQUEyQixDQUFDO1FBQ3hDLGNBQVMsR0FBRywyQkFBMkIsQ0FBQztRQUN4Qyx3QkFBbUIsR0FBRyxxQ0FBcUMsQ0FBQztRQUM1RCxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFPOUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG9CQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVksRUFBRSxJQUFZO1FBRTNCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUVqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWxELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFFckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUV0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtCQUFrQixDQUFDLFVBQWtCO1FBRWpDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQztRQUVsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUF3QixFQUFFLFVBQWtCO1FBRS9DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUUzQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBVSxFQUFFLE1BQWU7UUFFeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQVU7UUFFZCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQTlFRCxnREE4RUMifQ==