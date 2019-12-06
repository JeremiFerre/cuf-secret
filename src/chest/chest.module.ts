import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chest } from './chest.entity';
import { Clue } from './clue.entity';
import { ChestService } from './chest.service';
import { ClueService } from './clue.service';
import { ChestController } from './chest.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Chest,
      Clue,
    ]),
  ],
  controllers: [ChestController],
  providers: [
    ClueService,
    ChestService,
  ],
  exports: [
    ClueService,
    ChestService,
  ],
})
export class ChestModule {}
