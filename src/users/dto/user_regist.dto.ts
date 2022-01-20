import { IsNumber, IsString } from 'class-validator';

export class UserRegistDto {
  @IsString()
  user_id: string;

  @IsString()
  password: string;

  @IsString()
  user_name: string;

  @IsString()
  user_phone: string;
}
