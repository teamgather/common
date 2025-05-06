import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * ANCHOR User
 * @date 07/05/2025 - 00:00:30
 *
 * @export
 * @class User
 * @typedef {User}
 */
@Schema({
  autoCreate: true,
  autoIndex: true,
  timestamps: true,
})
export class User {
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
 * ANCHOR User Document
 * @date 07/05/2025 - 00:00:57
 *
 * @export
 * @typedef {UserDocument}
 */
export type UserDocument = HydratedDocument<User>;

/**
 * ANCHOR User Schema
 * @date 07/05/2025 - 00:01:03
 *
 * @type {*}
 */
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({
  createdAt: -1,
});
