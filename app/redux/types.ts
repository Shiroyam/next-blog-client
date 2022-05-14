export interface IUserAuth {
  id?: number;
  fullName: string;
  email: string;
  password: string;
  access_token: string;
}

export interface IUserReg {
  id?: number;
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
export interface IComment {
    text: string,
    post: IPost,
    user: IUserReg,
}
