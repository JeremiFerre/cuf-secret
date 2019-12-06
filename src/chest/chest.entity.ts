import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Clue } from './clue.entity';

@Entity()
export class Chest {

  @PrimaryColumn()
  gameId: string;

  @Column('simple-array')
  code: number[];

  @Column()
  winnerCompany: string;

  @OneToMany(() => Clue, object => object.chest)
  clues: Promise<Clue[]>;
}
