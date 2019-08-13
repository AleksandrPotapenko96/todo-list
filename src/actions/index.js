export const POSTS = {};

POSTS.REQUESTED = "posts/requested";
POSTS.FAILED = "posts/failed";
POSTS.SUCCEEDED = "posts/succeeded";

POSTS.ADDED = "posts/added";

export const posts = {
  request: (location) => ({ type: POSTS.REQUESTED, payload: location }),

  failed: (error) => ({ type: POSTS.FAILED, payload: error }),

  succeeded: (payload) => ({ type: POSTS.SUCCEEDED, payload }),

  added: (payload) => ({ type: POSTS.ADDED, payload }),
};

export const FRIENDS = {};

FRIENDS.REQUESTED = "friends/requested";
FRIENDS.FAILED = "friends/failed";
FRIENDS.SUCCEEDED = "friends/succeeded";

FRIENDS.ADDED = "friends/added";

export const friends = {
  request: (location) => ({ type: FRIENDS.REQUESTED, payload: location }),

  failed: (error) => ({ type: FRIENDS.FAILED, payload: error }),

  succeeded: (payload) => ({ type: FRIENDS.SUCCEEDED, payload }),

  added: (payload) => ({ type: FRIENDS.ADDED, payload }),
};

