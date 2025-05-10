import { MemberModel } from './member.model';

/**
 * ANCHOR Project Model
 * @date 09/05/2025 - 08:36:20
 *
 * @export
 * @interface ProjectModel
 * @typedef {ProjectModel}
 */
export interface ProjectModel {
  id: string;
  name: string;
  description?: string | null;
  members: MemberModel[];
  createdAt: string;
}
