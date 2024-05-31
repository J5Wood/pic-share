export default interface PostInterface {
  url: string;
  id: number;
  username: string;
  user_id: string;
  content: string;
  inserted_at: string;
  likes: Array<{
    user_id: string;
    id?: number;
    post_id?: number;
    updated_at?: string;
    inserted_at?: string;
  }>;
}
