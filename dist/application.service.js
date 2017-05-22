"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_js_1 = require("@haventec/common-js");
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
        this.http = new common_js_1.HttpService();
        this.localDataService = new common_js_1.LocalDataService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(from, take) {
        var url = this.basePathSw + this.listUrl + "?size=" + take + "&page=" + from;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchById(id) {
        var url = this.basePathSw + this.searchIdUrl + id;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByUuid(name) {
        var url = this.basePathSw + this.searchUuidUrl + name;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByTenantUUID(tenantUUID) {
        var url = this.basePathSw + this.searchTenantUuidUrl + tenantUUID;
        return this.http.get(url, this.localDataService.getToken());
    }
    create(application, tenantUUID) {
        var url = this.basePathSw + this.createUrl;
        return this.http.post(url, { name: application.name, description: application.description, tenantUUID: tenantUUID }, this.localDataService.getToken());
    }
    update(application) {
        var url = this.basePathSw + this.updateUrl;
        return this.http.post(url, application, this.localDataService.getToken());
    }
    changelockstatus(id, locked) {
        var url = this.basePathSw + this.changelockstatusUrl;
        return this.http.post(url, { id: id, lock: !locked }, this.localDataService.getToken());
    }
    disable(id) {
        var url = this.basePathSw + this.disableUrl;
        return this.http.post(url, { id: id }, this.localDataService.getToken());
    }
}
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2FwcGxpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBa0U7QUFHbEU7SUFnQkksWUFDVyxXQUFtQixFQUNuQixXQUFtQjtRQURuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQWR0QixZQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxnQ0FBZ0MsQ0FBQztRQUMvQyxrQkFBYSxHQUFHLGtDQUFrQyxDQUFDO1FBQ25ELHdCQUFtQixHQUFHLHlDQUF5QyxDQUFDO1FBQ2hFLGNBQVMsR0FBRywyQkFBMkIsQ0FBQztRQUN4QyxjQUFTLEdBQUcsMkJBQTJCLENBQUM7UUFDeEMsd0JBQW1CLEdBQUcscUNBQXFDLENBQUM7UUFDNUQsZUFBVSxHQUFHLDRCQUE0QixDQUFDO1FBUTlDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx1QkFBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksNEJBQWdCLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVksRUFBRSxJQUFZO1FBRTNCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsVUFBVSxDQUFDLEVBQVU7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