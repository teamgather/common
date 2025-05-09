import { MemberModel } from './member.model';

/**
 * ANCHOR User Model
 * @date 08/05/2025 - 03:26:51
 *
 * @export
 * @interface UserModel
 * @typedef {UserModel}
 */
export interface UserModel {
  id: string;
  name: string;
  email: string;
  members: MemberModel[];
}
