import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column({ type: 'float', default: 0 })
  averageRating: number;

  constructor() {
    this.id = 0; 
    this.name = '';
    this.description = '';
    this.price = 0;
    this.averageRating = 0;
  }
}
