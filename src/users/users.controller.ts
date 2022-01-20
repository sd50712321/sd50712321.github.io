import {
  BadRequestException,
  Body,
  Controller,
  Logger,
  Post,
} from '@nestjs/common';
import { UserRegistDto } from './dto/user_regist.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  private logger = new Logger('UsersController');

  @Post()
  async registUser(@Body() userRegistDto: UserRegistDto): Promise<void> {
    this.logger.log('userRegistDto', JSON.stringify(userRegistDto));
    const result = await this.userService.registUser(userRegistDto);
    return result;
  }
}
