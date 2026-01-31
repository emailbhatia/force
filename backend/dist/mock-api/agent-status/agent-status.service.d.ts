export declare class AgentStatusService {
    private agents;
    getAllAgents(): {
        id: string;
        name: string;
        status: string;
        team: string;
    }[];
    getAgentById(id: string): {
        id: string;
        name: string;
        status: string;
        team: string;
    } | undefined;
    updateAgentStatus(id: string, status: string): {
        id: string;
        name: string;
        status: string;
        team: string;
    } | undefined;
}
