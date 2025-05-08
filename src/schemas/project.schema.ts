import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Member, MemberSchema } from './member.schema';

/**
 * ANCHOR Project
 * @date 08/05/2025 - 09:55:44
 *
 * @export
 * @class Project
 * @typedef {Project}
 */
@Schema({
  autoCreate: true,
  autoIndex: true,
  timestamps: true,
})
export class Project {
  @Prop({
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  })
  name: string;

  @Prop({
    type: [MemberSchema],
    required: true,
  })
  members: Member[];

  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;
}

/**
 * ANCHOR Project Document
 * @date 08/05/2025 - 09:55:58
 *
 * @export
 * @typedef {ProjectDocument}
 */
export type ProjectDocument = HydratedDocument<Project>;

/**
 * ANCHOR Project Schema
 * @date 08/05/2025 - 09:56:05
 *
 * @type {*}
 */
export const ProjectSchema = SchemaFactory.createForClass(Project);
