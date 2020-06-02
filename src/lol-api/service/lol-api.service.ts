import { Injectable } from '@nestjs/common'
import { LolApi } from 'twisted'

@Injectable()
export class LolApiService {
  private api = new LolApi()

  get dataDragon () {
    return this.api.DataDragon
  }
}
