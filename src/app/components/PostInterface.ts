export default interface PostInterface {
  url: string;
  id: number;
  username: string;
  user_id: string;
  content: string;
  likes: Array<{ user_id: string }>;
  inserted_at: string;
}
