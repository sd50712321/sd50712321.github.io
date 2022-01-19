import { Camp } from './camps.entity';
import { Repository, EntityRepository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { CampRegistDto } from './dto/camp_regist.dto';

@EntityRepository(Camp)
export class CampsRepository extends Repository<Camp> {
  private logger = new Logger('CampsRepository', { timestamp: true });

  async createCamp(createCampDto: CampRegistDto): Promise<Camp> {
    // const {
    //   zip_code,
    //   jibun_addr,
    //   dets_addr,
    //   intro,
    //   mobile,
    // } = createCampDto;

    const camp = this.create({
      ...createCampDto,
    });
    this.logger.log('camp', camp);

    await this.save(camp);
    return camp;
  }

  // async deleteCampById(id: string): Promise<DeleteResult> {
  //   const result = await this.delete(id);
  //   return result;
  // }

  // async updateCampStatus(
  //   id: string,
  //   status: CampStatus,
  //   user: User,
  // ): Promise<Camp> {
  //   const camp = await this.findOne({ where: { id, user } });
  //   camp.status = status;
  //   await this.save(camp);
  //   return camp;
  // }

  // async getCamps(filterDto: GetCampsDto, user: User): Promise<Camp[]> {
  //   const { status, search } = filterDto;
  //   const query = this.createQueryBuilder('camp');
  //   query.where({ user });

  //   if (status) {
  //     query.andWhere('camp.status = :status', { status });
  //   }

  //   if (search) {
  //     query.andWhere(
  //       '(LOWER(camp.title) LIKE LOWER(:search) OR LOWER(camp.description) LIKE LOWER(:search))',
  //       { search: `%${search}%` },
  //     );
  //   }
  //   try {
  //     const camps = await query.getMany();
  //     return camps;
  //   } catch (err) {
  //     this.logger.error(err);
  //     throw new InternalServerErrorException();
  //   }
  // }
}
