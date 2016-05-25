/**
 * Created by bclover on 5/25/16.
 */
"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { "id": 11, "name": "Bryan Clover" },
            { "id": 12, "name": "Winston Churchill" },
            { "id": 13, "name": "Neil Armstrong" },
            { "id": 14, "name": "Martin Luther King" },
            { "id": 15, "name": "Thomas Jefferson" },
            { "id": 16, "name": "Benjamin Franklin" },
            { "id": 17, "name": "Taylor Swift" },
            { "id": 18, "name": "George Washington" },
            { "id": 19, "name": "Abraham Lincoln" },
            { "id": 20, "name": "Marcus Lutrell" }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map