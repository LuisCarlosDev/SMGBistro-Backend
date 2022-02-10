import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('recepis')
class Recepis {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  prepare: string;

  @Column()
  ingredients: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Recepis };
