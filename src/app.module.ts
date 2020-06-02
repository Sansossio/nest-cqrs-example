import { Module } from '@nestjs/common'
import { ChampionModule } from './champion/champion.module'
import { LolApiModule } from './lol-api/lol-api.module'

@Module({
  imports: [ChampionModule, LolApiModule]
})
export class AppModule {}
