/**
 *  Todo の型定義
 */
export interface Todo {
  /** ID */
  id: string;
  /** タイトル */
  title: string;
  /** 説明 */
  description: string;
  /** 完了しているか */
  completed: boolean;
}
