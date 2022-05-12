interface PostsAction {
  type: string;
  payload: any[];
}

interface PostsState {
  posts: any;
}

const initState: PostsState = {
  posts: false,
};

export const postsReducer = (state = initState, action: PostsAction) => {
  switch (action.type) {
    case "GET_POST":
      return { posts: action.payload };
    default:
      return state;
  }
};
