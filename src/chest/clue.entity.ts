import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Chest } from './chest.entity';

@Entity()
export class Clue {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @ManyToOne(type => Chest, object => object.clues)
  chest: Promise<Chest>;
}
