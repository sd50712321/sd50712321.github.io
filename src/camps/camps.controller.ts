import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Camp } from './camps.entity';
import { CampsService } from './camps.service';
import { CampRegistDto } from './dto/camp_regist.dto';
import { UpdateCampDto } from './dto/camp_update.dto';

@Controller('camps')
export class CampsController {
  constructor(private campService: CampsService) {}

  @Post()
  async registerCamp(@Body() CampRegistDto: CampRegistDto): Promise<Camp> {
    return this.campService.registCamp(CampRegistDto);
  }
}
