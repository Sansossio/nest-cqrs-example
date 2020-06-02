import { Champions } from 'twisted/dist/constants'

export class GetChampionQuery {
  constructor (
    public readonly champion: Champions
  ) {}
}
