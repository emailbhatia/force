import { Injectable } from '@nestjs/common';

@Injectable()
export class AgentStatusService {
  private agents = [
    { id: '1', name: 'Alice Johnson', status: 'Available', team: 'Sales' },
    { id: '2', name: 'Bob Smith', status: 'Busy', team: 'Support' },
    { id: '3', name: 'Charlie Davis', status: 'Break', team: 'Sales' },
    { id: '4', name: 'Diana Evans', status: 'Available', team: 'Support' },
  ];

  getAllAgents() {
    return this.agents;
  }

  getAgentById(id: string) {
    return this.agents.find((agent) => agent.id === id);
  }

  updateAgentStatus(id: string, status: string) {
    const agent = this.agents.find((a) => a.id === id);
    if (agent) {
      agent.status = status;
    }
    return agent;
  }
}
