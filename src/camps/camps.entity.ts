import { Exclude } from 'class-transformer';
// import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Camp {
  @PrimaryGeneratedColumn('increment', {
    comment: '캠핑장 인덱스',
  })
  camp_idx: number;

  @Column({
    comment: '캠프 이름',
  })
  camp_name: string;

  @Column({
    comment: '우편 번호',
  })
  zip_code: string;

  @Column({
    comment: '지번 주소',
  })
  jibun_addr: string;

  @Column({
    comment: '상세 주소',
  })
  dets_addr: string;

  @Column({
    comment: '캠핑장 소개',
  })
  intro: string;

  @Column({
    comment: '캠핑장 번호',
  })
  mobile: string;

  @Column({
    comment: '최초 생성 일자',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  first_create_dt: Date;

  @Column({
    comment: '마지막 수정 일자',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  last_update_dt: Date;

  // @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
  // @Exclude({ toPlainOnly: true })
  // user: User;
}
