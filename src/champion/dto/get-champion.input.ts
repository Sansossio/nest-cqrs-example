import { Champions } from 'twisted/dist/constants'
import { ApiProperty } from '@nestjs/swagger'

export class GetChampionInput {
  @ApiProperty({ enum: Champions })
  champion: Champions
}
