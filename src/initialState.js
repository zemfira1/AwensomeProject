export const initialState = {
  user: {
    login: "",
    email: "",
    password: "",
    avatar: "",
  },
  posts: {
    postsList: [],
    isLoading: false,
    isError: false,
    post: {
      id: "",
      image: "",
      name: "",
      location: "",
    },
  },
};
