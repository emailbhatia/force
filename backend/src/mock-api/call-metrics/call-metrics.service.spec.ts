import { Test, TestingModule } from '@nestjs/testing';
import { CallMetricsService } from './call-metrics.service';

describe('CallMetricsService', () => {
  let service: CallMetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallMetricsService],
    }).compile();

    service = module.get<CallMetricsService>(CallMetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
