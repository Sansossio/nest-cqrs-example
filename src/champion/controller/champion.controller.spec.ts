import { ChampionController } from './champion.controller'

describe('Champion Controller', () => {
  let controller: ChampionController

  const queryBus = {
    execute: jest.fn()
  }

  const commandBus = {
    execute: jest.fn()
  }

  beforeEach(async () => {
    controller = new ChampionController(queryBus as any, commandBus as any)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
