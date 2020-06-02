import { Module } from '@nestjs/common'
import { ChampionController } from './controller/champion.controller'
import { LolApiModule } from '../lol-api/lol-api.module'
import { CqrsModule } from '@nestjs/cqrs'
import { GetChampionHandler } from './queries/handlers/get-champion.handle'
import { DeleteChampionHandler } from './commands/handlers/delete-champion.handler'

@Module({
  imports: [CqrsModule, LolApiModule],
  controllers: [ChampionController],
  providers: [
    GetChampionHandler,
    DeleteChampionHandler
  ]
})
export class ChampionModule {}
