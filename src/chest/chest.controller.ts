import { Body, Controller, Post } from '@nestjs/common';
import { ChestService } from './chest.service';
import { Clue } from './clue.entity';

@Controller('chest')
export class ChestController {

  constructor(
    private readonly chestService: ChestService,
  ) {
  }

  @Post('clues')
  async retrieveClues(@Body() gameId: string): Promise<Clue[]> {
    return (await this.chestService.getChest(gameId)).clues;
  }
}
