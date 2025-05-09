import { MemberRoleEnum } from '../enums/member.enum';

/**
 * ANCHOR Member Model
 * @date 09/05/2025 - 09:49:40
 *
 * @export
 * @interface MemberModel
 * @typedef {MemberModel}
 */
export interface MemberModel {
  id: string;
  projectId: string;
  userId: string;
  role: MemberRoleEnum;
  createdAt: string;
}
