import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chest } from './chest.entity';
import { Repository } from 'typeorm';
import { Clue } from './clue.entity';

@Injectable()
export class ClueService {

  constructor(
    @InjectRepository(Clue)
    private readonly clueRepository: Repository<Clue>,
  ) {
  }

  async createClue(chest: Chest, message: string): Promise<Clue> {
    return this.clueRepository.save({
      chest: Promise.resolve(chest),
      message,
    });
  }
}
