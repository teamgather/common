/**
 * ANCHOR Label Interface
 * @date 08/05/2025 - 10:13:22
 *
 * @export
 * @interface LabelInterface
 * @typedef {LabelInterface}
 * @template T
 */
export interface LabelInterface<T> {
  key: T;
  title: string;
  tailwindBgColor?: string;
}
