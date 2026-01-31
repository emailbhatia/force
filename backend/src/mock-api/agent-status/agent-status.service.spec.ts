import { Test, TestingModule } from '@nestjs/testing';
import { AgentStatusService } from './agent-status.service';

describe('AgentStatusService', () => {
  let service: AgentStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentStatusService],
    }).compile();

    service = module.get<AgentStatusService>(AgentStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
