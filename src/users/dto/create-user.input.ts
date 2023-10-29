import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { UserStatus } from './../../common/constants';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  phoneNumber: number;

  @Field()
  @IsEnum(() => UserStatus)
  status: string;
}
