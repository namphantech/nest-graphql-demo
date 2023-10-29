import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './../entities/pet.entity';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepo: Repository<Pet>) {}

  async findPets(): Promise<Pet[]> {
    return await this.petRepo.find();
  }
  async createPet(petDto: CreatePetDto) {
    return await this.petRepo.save(petDto);
  }

  async getPet(id: number): Promise<Pet> {
    return await this.petRepo.findOne({ where: { id } });
  }
}
