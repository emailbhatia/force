import { Module } from '@nestjs/common';
import { AgentStatusController } from './agent-status/agent-status.controller';
import { AgentStatusService } from './agent-status/agent-status.service';
import { CallMetricsController } from './call-metrics/call-metrics.controller';
import { CallMetricsService } from './call-metrics/call-metrics.service';

@Module({
  controllers: [AgentStatusController, CallMetricsController],
  providers: [AgentStatusService, CallMetricsService]
})
export class MockApiModule {}
