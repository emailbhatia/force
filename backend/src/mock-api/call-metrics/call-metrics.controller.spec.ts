import { Test, TestingModule } from '@nestjs/testing';
import { CallMetricsController } from './call-metrics.controller';

describe('CallMetricsController', () => {
  let controller: CallMetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallMetricsController],
    }).compile();

    controller = module.get<CallMetricsController>(CallMetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
