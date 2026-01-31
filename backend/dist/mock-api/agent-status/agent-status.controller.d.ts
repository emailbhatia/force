import { AgentStatusService } from './agent-status.service';
export declare class AgentStatusController {
    private readonly agentStatusService;
    constructor(agentStatusService: AgentStatusService);
    getAllAgents(): {
        id: string;
        name: string;
        status: string;
        team: string;
    }[];
    getAgent(id: string): {
        id: string;
        name: string;
        status: string;
        team: string;
    } | undefined;
    updateStatus(id: string, status: string): {
        id: string;
        name: string;
        status: string;
        team: string;
    } | undefined;
}
