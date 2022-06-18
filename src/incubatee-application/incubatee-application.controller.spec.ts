import { Test, TestingModule } from '@nestjs/testing'
import { IncubateeApplicationController } from './incubatee-application.controller'
import { IncubateeApplicationService } from './incubatee-application.service'

describe('IncubateeApplicationController', () => {
  let controller: IncubateeApplicationController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncubateeApplicationController],
      providers: [IncubateeApplicationService],
    }).compile()

    controller = module.get<IncubateeApplicationController>(IncubateeApplicationController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
