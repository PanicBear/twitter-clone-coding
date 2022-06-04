export let tweets = [
  {
    id: '1',
    text: 'test',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://picsum.photos/64/64',
  },
  {
    id: '2',
    text: 'test2',
    createdAt: Date.now().toString(),
    name: 'Clarko',
    username: 'clarko',
    url: 'https://picsum.photos/64/64',
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => {
    return tweet.username === username;
  });
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    name,
    username,
    createdAt: Date.now(),
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    return tweet;
  }
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
