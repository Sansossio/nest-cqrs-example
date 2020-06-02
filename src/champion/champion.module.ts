import { Module } from '@nestjs/common'
import { ChampionController } from './controller/champion.controller'

@Module({
  controllers: [ChampionController]
})
export class ChampionModule {}
