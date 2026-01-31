import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AgentStatusService } from './agent-status.service';

@Controller('agent-status')
export class AgentStatusController {
    constructor(private readonly agentStatusService: AgentStatusService) { }

    @Get()
    getAllAgents() {
        return this.agentStatusService.getAllAgents();
    }

    @Get(':id')
    getAgent(@Param('id') id: string) {
        return this.agentStatusService.getAgentById(id);
    }

    @Post(':id/status')
    updateStatus(@Param('id') id: string, @Body('status') status: string) {
        return this.agentStatusService.updateAgentStatus(id, status);
    }
}
