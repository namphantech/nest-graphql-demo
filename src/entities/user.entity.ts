import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pet } from './pet.entity';
import { UserStatus } from './../common/constants';

@ObjectType()
@Entity('user')
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('character varying', {
    name: 'full_name',
    nullable: true,
    length: 128,
  })
  name: string;

  @Field()
  @Column('character varying', {
    name: 'phone_number',
    nullable: true,
    length: 32,
  })
  phoneNumber: string;

  @Field()
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @Field()
  @Column()
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (pet) => pet.owner)
  pets: Pet[];

  ownerId: number;
}
