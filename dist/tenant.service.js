"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@haventec/common");
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
        this.http = new common_1.HttpService();
        this.basePathSw = domainUrlSw;
        this.basePathTp = domainUrlTp;
    }
    list(from, take) {
        var url = this.basePathTp + this.listUrl + "?size=" + take + "&page=" + from;
        return this.http.get(url);
    }
    searchById(id) {
        var url = this.basePathTp + this.searchIdUrl + id;
        return this.http.get(url);
    }
    searchByUuid(uuid) {
        var url = this.basePathTp + this.searchUuidUrl + uuid;
        return this.http.get(url);
    }
    searchByName(name) {
        var url = this.basePathTp + this.searchNameUrl + name;
        return this.http.get(url);
    }
    create(tenant) {
        var url = this.basePathTp + this.createUrl;
        return this.http.post(url, { name: tenant.name, email: tenant.email });
    }
    update(tenant) {
        var url = this.basePathTp + this.updateUrl;
        return this.http.post(url, tenant);
    }
    changelockstatus(id, locked) {
        var url = this.basePathTp + this.changelockstatusUrl;
        return this.http.post(url, { id: id, lock: !locked });
    }
    disable(id) {
        var url = this.basePathTp + this.disableUrl;
        return this.http.post(url, { id: id });
    }
}
exports.TenantService = TenantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy90ZW5hbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE2QztBQUc3QztJQWNJLFlBQ1csV0FBbUIsRUFDbkIsV0FBbUI7UUFEbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFidEIsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUMxQixnQkFBVyxHQUFHLDJCQUEyQixDQUFDO1FBQzFDLGtCQUFhLEdBQUcsNkJBQTZCLENBQUM7UUFDOUMsa0JBQWEsR0FBRyw2QkFBNkIsQ0FBQztRQUM5QyxjQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDbkMsY0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQ25DLHdCQUFtQixHQUFHLGdDQUFnQyxDQUFDO1FBQ3ZELGVBQVUsR0FBRyx1QkFBdUIsQ0FBQztRQU96QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksb0JBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBWSxFQUFFLElBQVk7UUFFM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztRQUU3RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBRWpCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUVyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXRELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFFckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUV0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjO1FBRWpCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYztRQUVqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBVSxFQUFFLE1BQWU7UUFFeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQVU7UUFFZCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQTdFRCxzQ0E2RUMifQ==