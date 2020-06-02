import { Module } from '@nestjs/common'
import { LolApiService } from './service/lol-api.service'

@Module({
  providers: [LolApiService],
  exports: [LolApiService]
})
export class LolApiModule {}
