import { Test, TestingModule } from '@nestjs/testing'
import { IncubateeApplicationService } from './incubatee-application.service'

describe('StartupApplicationService', () => {
  let service: IncubateeApplicationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncubateeApplicationService],
    }).compile()

    service = module.get<IncubateeApplicationService>(IncubateeApplicationService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
