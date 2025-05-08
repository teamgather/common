import { MemberRoleEnum } from '../enums/member.enum';
import { LabelInterface } from '../interfaces/common.interface';

/**
 * ANCHOR Member Role Label
 * @date 08/05/2025 - 10:12:49
 *
 * @type {{
 *   [key in MemberRoleEnum]: LabelInterface<MemberRoleEnum>;
 * }}
 */
export const MemberRoleLabel: {
  [key in MemberRoleEnum]: LabelInterface<MemberRoleEnum>;
} = {
  OWNER: {
    key: MemberRoleEnum.Owner,
    title: 'Owner',
    tailwindBgColor: 'bg-purple-500',
  },
  MEMBER: {
    key: MemberRoleEnum.Member,
    title: 'Member',
    tailwindBgColor: 'bg-blue-500',
  },
};
