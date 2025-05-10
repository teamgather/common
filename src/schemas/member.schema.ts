import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MemberRoleEnum } from '../enums/member.enum';

/**
 * ANCHOR Member
 * @date 08/05/2025 - 10:09:38
 *
 * @export
 * @class Member
 * @typedef {Member}
 */
@Schema({
  _id: false,
  autoCreate: false,
  autoIndex: false,
  timestamps: false,
})
export class Member {
  @Prop({
    type: String,
    required: true,
  })
  id: string;

  @Prop({
    type: String,
    required: true,
  })
  projectId: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  projectName: string;

  @Prop({
    type: String,
    required: true,
  })
  userId: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  userName: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  userEmail: string;

  @Prop({
    type: String,
    enum: Object.values(MemberRoleEnum),
    required: true,
  })
  role: MemberRoleEnum;

  @Prop({
    type: Date,
    required: true,
  })
  createdAt: Date;

  @Prop({
    type: Date,
    required: true,
  })
  updatedAt: Date;
}

/**
 * ANCHOR Member Document
 * @date 08/05/2025 - 10:09:49
 *
 * @export
 * @typedef {MemberDocument}
 */
export type MemberDocument = HydratedDocument<Member>;

/**
 * ANCHOR Member Schema
 * @date 08/05/2025 - 10:09:57
 *
 * @type {*}
 */
export const MemberSchema = SchemaFactory.createForClass(Member);
