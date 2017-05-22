"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_js_1 = require("@haventec/common-js");
class TenantService {
    constructor(domainUrlSw, domainUrlTp) {
        this.domainUrlSw = domainUrlSw;
        this.domainUrlTp = domainUrlTp;
        this.listUrl = '/admin/tenant';
        this.searchIdUrl = '/admin/tenant/searchbyid/';
        this.searchUuidUrl = '/admin/tenant/searchbyuuid/';
        this.searchNameUrl = '/admin/tenant/searchbyname/';
        this.createUrl = '/admin/tenant/create';
        this.updateUrl = '/admin/tenant/update';
        this.changelockstatusUrl = '/admin/tenant/changelockstatus';
        this.disableUrl = '/admin/tenant/disable';
        this.http = new common_js_1.HttpService();
        this.localDataService = new common_js_1.LocalDataService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(from, take) {
        var url = this.basePathTp + this.listUrl + "?size=" + take + "&page=" + from;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchById(id) {
        var url = this.basePathTp + this.searchIdUrl + id;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByUuid(uuid) {
        var url = this.basePathTp + this.searchUuidUrl + uuid;
        return this.http.get(url, this.localDataService.getToken());
    }
    searchByName(name) {
        var url = this.basePathTp + this.searchNameUrl + name;
        return this.http.get(url, this.localDataService.getToken());
    }
    create(tenant) {
        var url = this.basePathTp + this.createUrl;
        return this.http.post(url, { name: tenant.name, email: tenant.email }, this.localDataService.getToken());
    }
    update(tenant) {
        var url = this.basePathTp + this.updateUrl;
        return this.http.post(url, tenant, this.localDataService.getToken());
    }
    changelockstatus(id, locked) {
        var url = this.basePathTp + this.changelockstatusUrl;
        return this.http.post(url, { id: id, lock: !locked }, this.localDataService.getToken());
    }
    disable(id) {
        var url = this.basePathTp + this.disableUrl;
        return this.http.post(url, { id: id }, this.localDataService.getToken());
    }
}
exports.TenantService = TenantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90ZW5hbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUdsRTtJQWVJLFlBQ1csV0FBbUIsRUFDbkIsV0FBbUI7UUFEbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFkdEIsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUMxQixnQkFBVyxHQUFHLDJCQUEyQixDQUFDO1FBQzFDLGtCQUFhLEdBQUcsNkJBQTZCLENBQUM7UUFDOUMsa0JBQWEsR0FBRyw2QkFBNkIsQ0FBQztRQUM5QyxjQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDbkMsY0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQ25DLHdCQUFtQixHQUFHLGdDQUFnQyxDQUFDO1FBQ3ZELGVBQVUsR0FBRyx1QkFBdUIsQ0FBQztRQVF6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDRCQUFnQixFQUFFLENBQUM7UUFFL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUUzQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRTdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBRWpCLElBQUksR0FB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