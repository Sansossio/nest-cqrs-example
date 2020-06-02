import { Controller, Get } from '@nestjs/common'
import { LolApi } from 'twisted'
import { Champions } from 'twisted/dist/constants'
import { ApiResponse } from '@nestjs/swagger'
import { ChampionDTO } from '../dto/champion.dto'

@Controller('champion')
export class ChampionController {
  @Get()
  @ApiResponse({ type: ChampionDTO })
  getChampion () {
    return new LolApi().DataDragon.getChampion(Champions.YASUO)
  }
}
