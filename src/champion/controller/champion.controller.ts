import { Controller, Get, Param, Query } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { ChampionDTO } from '../dto/champion.dto'
import { QueryBus } from '@nestjs/cqrs'
import { GetChampionQuery } from '../queries/impl/get-champion.query'
import { GetChampionInput } from '../dto/get-champion.input'

@Controller('champion')
export class ChampionController {
  constructor (
    private readonly queryBus: QueryBus
  ) {}

  @Get()
  @ApiResponse({ type: ChampionDTO })
  getChampion (@Query() { champion }: GetChampionInput) {
    return this.queryBus.execute(new GetChampionQuery(champion))
  }
}
