import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
@InputType()
export class CreatePetDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  type: string;
}
