import { Module } from '@nestjs/common'
import { ChampionModule } from './champion/champion.module'

@Module({
  imports: [ChampionModule]
})
export class AppModule {}
