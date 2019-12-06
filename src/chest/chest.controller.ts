import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChestService } from './chest.service';
import { Clue } from './clue.entity';

interface ValidationDto {
  code: string;
  gameId: string;
}

@Controller('chest')
export class ChestController {

  constructor(
    private readonly chestService: ChestService,
  ) {
  }

  @Get()
  health() {
    return 'hello';
  }

  @Post('clues')
  async retrieveClues(@Body() gameId: string): Promise<Clue[]> {
    return (await this.chestService.getChest(gameId)).clues;
  }

  @Post('validate')
  async validateChestCode(@Body() validationDto: ValidationDto): Promise<boolean> {
    const {code, gameId} = validationDto;
    return this.chestService.validateCode(gameId, code);
  }
}
