import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Pet } from './../entities/pet.entity';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  async pets() {
    return await this.petsService.findPets();
  }

  @Mutation((returns) => Pet)
  async createPet(@Args('createPet') petDto: CreatePetDto): Promise<Pet> {
    return await this.petsService.createPet(petDto);
  }
  @Query((returns) => Pet)
  async getPet(@Args('id', { type: () => Int }) id: number) {
    console.log(id);
    return await this.petsService.getPet(id);
  }
}
