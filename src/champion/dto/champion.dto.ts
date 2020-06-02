import { ApiProperty } from '@nestjs/swagger'

export class ChampionDTO {
  @ApiProperty({
    description: 'Champion id'
  })
  id: number

  @ApiProperty({
    description: 'Champion name'
  })
  name: string
}
