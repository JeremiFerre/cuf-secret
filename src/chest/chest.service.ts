import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Chest } from './chest.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChestService {

  constructor(
    @InjectRepository(Chest)
    private readonly chestRepository: Repository<Chest>,
  ) {
  }

  async getChest(gameId: string) {
    const chest: Chest = await this.chestRepository.findOne(gameId);
    if (!chest) {
      const getRandom = () => Math.floor(Math.random() * 10);
      return this.chestRepository.save({
        code: [getRandom(), getRandom(), getRandom(), getRandom()],
        gameId,
        winnerCompany: 'myCompany',
      });
    } else {
      return chest;
    }
  }

  async validateCode(gameId: string, code: string): Promise<boolean> {
    const chest: Chest = await this.getChest(gameId);
    return chest.code.join('') === code;
  }
}
