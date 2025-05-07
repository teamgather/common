import { JwtPayload } from 'jsonwebtoken';

/**
 * ANCHOR Auth Access Token Interface
 * @date 08/05/2025 - 04:46:20
 *
 * @export
 * @interface AuthAccessTokenInterface
 * @typedef {AuthAccessTokenInterface}
 * @extends {JwtPayload}
 */
export interface AuthAccessTokenInterface extends JwtPayload {
  userId: string;
}

/**
 * ANCHOR Auth User Interface
 * @date 08/05/2025 - 04:47:16
 *
 * @export
 * @interface AuthUserInterface
 * @typedef {AuthUserInterface}
 */
export interface AuthUserInterface {
  userId: string;
}
