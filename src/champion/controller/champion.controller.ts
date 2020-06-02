import { Controller, Get, Query } from '@nestjs/common'
import { ApiTags, ApiOkResponse } from '@nestjs/swagger'
import { ChampionDTO } from '../dto/champion.dto'
import { QueryBus } from '@nestjs/cqrs'
import { GetChampionQuery } from '../queries/impl/get-champion.query'
import { GetChampionInput } from '../dto/get-champion.input'

@Controller('champion')
@ApiTags('Champions')
export class ChampionController {
  constructor (
    private readonly queryBus: QueryBus
  ) {}

  @Get()
  @ApiOkResponse({ type: ChampionDTO, description: 'Champion details' })
  getChampion (@Query() { champion }: GetChampionInput) {
    return this.queryBus.execute(new GetChampionQuery(champion))
  }
}
