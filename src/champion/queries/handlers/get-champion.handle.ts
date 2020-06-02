import { QueryHandler, IQueryHandler } from '@nestjs/cqrs'
import { GetChampionQuery } from '../impl/get-champion.query'
import { LolApiService } from '../../../lol-api/service/lol-api.service'
import { Champions } from 'twisted/dist/constants'
import { ChampionDTO } from '../../dto/champion.dto'

@QueryHandler(GetChampionQuery)
export class GetChampionHandler implements IQueryHandler<GetChampionQuery> {
  constructor (
    private readonly lolApi: LolApiService
  ) {}

  async execute (query: GetChampionQuery): Promise<ChampionDTO> {
    const id = +Champions[query.champion]
    const response = await this.lolApi.dataDragon.getChampion(id)
    return {
      id,
      name: response.name
    }
  }
}
