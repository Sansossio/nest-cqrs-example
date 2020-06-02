import { ApiProperty } from '@nestjs/swagger'

export class ChampionDTO {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string
}
