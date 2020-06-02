import { Controller, Get, Query, Delete, Body, HttpStatus, HttpCode } from '@nestjs/common'
import { ApiTags, ApiOkResponse, ApiResponse } from '@nestjs/swagger'
import { ChampionDTO } from '../dto/champion.dto'
import { QueryBus, CommandBus } from '@nestjs/cqrs'
import { GetChampionQuery } from '../queries/impl/get-champion.query'
import { GetChampionInput } from '../dto/get-champion.input'
import { DeleteChampionCommand } from '../commands/impl/delete-champion.command'

@Controller('champion')
@ApiTags('Champions')
export class ChampionController {
  constructor (
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @Get()
  @ApiOkResponse({ type: ChampionDTO, description: 'Champion details' })
  getChampion (@Query() { champion }: GetChampionInput) {
    return this.queryBus.execute(new GetChampionQuery(champion))
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteChampion (@Body() { champion }: GetChampionInput) {
    return this.commandBus.execute(new DeleteChampionCommand(champion))
  }
}
