"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockApiModule = void 0;
const common_1 = require("@nestjs/common");
const agent_status_controller_1 = require("./agent-status/agent-status.controller");
const agent_status_service_1 = require("./agent-status/agent-status.service");
const call_metrics_controller_1 = require("./call-metrics/call-metrics.controller");
const call_metrics_service_1 = require("./call-metrics/call-metrics.service");
let MockApiModule = class MockApiModule {
};
exports.MockApiModule = MockApiModule;
exports.MockApiModule = MockApiModule = __decorate([
    (0, common_1.Module)({
        controllers: [agent_status_controller_1.AgentStatusController, call_metrics_controller_1.CallMetricsController],
        providers: [agent_status_service_1.AgentStatusService, call_metrics_service_1.CallMetricsService]
    })
], MockApiModule);
//# sourceMappingURL=mock-api.module.js.map