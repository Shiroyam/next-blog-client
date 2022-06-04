export interface IUserAuth {
  id?: number;
  fullName: string;
  email: string;
  password: string;
  token: string;
}

export interface IUserReg {
  id?: number;
  fullName: string;
  email: string;
  password: string;
}

export interface IPost {
  views: number;
  title: string;
  description: string;
  photoUrl: string;
  text: string;
  createdAt: string;
  _Id: number;
}
export interface IComment {
    id: string;
    text: string;
    post: IPost;
    user: IUserReg;
}
