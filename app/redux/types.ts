export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  photoUrl: string;
  text: string;
  userId: number;
}
