import { Exclude } from 'class-transformer';
import { Camp } from 'src/camps/camps.entity';
// import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'user',
  synchronize: true,
})
export class User extends BaseEntity {
  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('increment', {
    comment: '유저 인덱스',
  })
  user_idx: number;

  @Column({
    comment: '유저 아이디',
  })
  user_id: string;

  @Column({
    comment: '비밀번호',
  })
  @Exclude()
  password: string;

  @Column({
    comment: '유저 이름',
  })
  user_name: string;

  @Column({
    comment: '전화번호',
  })
  user_phone: string;

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

  @OneToOne((_type) => Camp, { eager: false })
  @OneToMany((_type) => Camp, (camp) => camp.user)
  @Exclude({ toPlainOnly: true })
  camps: Camp[];
}
