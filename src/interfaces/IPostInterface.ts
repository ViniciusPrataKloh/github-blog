export interface IPost {
  id: string;
  title: string;
  body: string;
  created_at: Date;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}