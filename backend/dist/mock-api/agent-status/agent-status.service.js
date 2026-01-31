"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentStatusService = void 0;
const common_1 = require("@nestjs/common");
let AgentStatusService = class AgentStatusService {
    agents = [
        { id: '1', name: 'Alice Johnson', status: 'Available', team: 'Sales' },
        { id: '2', name: 'Bob Smith', status: 'Busy', team: 'Support' },
        { id: '3', name: 'Charlie Davis', status: 'Break', team: 'Sales' },
        { id: '4', name: 'Diana Evans', status: 'Available', team: 'Support' },
    ];
    getAllAgents() {
        return this.agents;
    }
    getAgentById(id) {
        return this.agents.find((agent) => agent.id === id);
    }
    updateAgentStatus(id, status) {
        const agent = this.agents.find((a) => a.id === id);
        if (agent) {
            agent.status = status;
        }
        return agent;
    }
};
exports.AgentStatusService = AgentStatusService;
exports.AgentStatusService = AgentStatusService = __decorate([
    (0, common_1.Injectable)()
], AgentStatusService);
//# sourceMappingURL=agent-status.service.js.map