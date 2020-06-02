import { Champions } from 'twisted/dist/constants'

export class DeleteChampionCommand {
  constructor (
    public readonly champion: Champions
  ) {}
}
