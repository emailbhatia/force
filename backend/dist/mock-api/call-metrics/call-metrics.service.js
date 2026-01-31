"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallMetricsService = void 0;
const common_1 = require("@nestjs/common");
let CallMetricsService = class CallMetricsService {
    getMetrics() {
        return {
            callsWaiting: Math.floor(Math.random() * 10),
            activeCalls: Math.floor(Math.random() * 20) + 10,
            averageHandleTime: Math.floor(Math.random() * 300) + 120,
            serviceLevel: Math.floor(Math.random() * 20) + 80,
            timestamp: new Date().toISOString(),
        };
    }
};
exports.CallMetricsService = CallMetricsService;
exports.CallMetricsService = CallMetricsService = __decorate([
    (0, common_1.Injectable)()
], CallMetricsService);
//# sourceMappingURL=call-metrics.service.js.map