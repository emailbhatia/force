import { Test, TestingModule } from '@nestjs/testing';
import { AgentStatusController } from './agent-status.controller';

describe('AgentStatusController', () => {
  let controller: AgentStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgentStatusController],
    }).compile();

    controller = module.get<AgentStatusController>(AgentStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
