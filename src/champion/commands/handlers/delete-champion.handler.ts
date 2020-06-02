import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { DeleteChampionCommand } from '../impl/delete-champion.command'

@CommandHandler(DeleteChampionCommand)
export class DeleteChampionHandler implements ICommandHandler<DeleteChampionCommand> {
  async execute (command: DeleteChampionCommand) {
    const { champion } = command
    console.log(`delete champion "${champion}"`)
  }
}
