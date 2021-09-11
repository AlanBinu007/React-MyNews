const fakeSources = {
  sources: [
    {
      id: "a",
      name: "Source One"
    },
    {
      id: "b",
      name: "Source Two"
    }
  ]
};

const fakeArticles = {
  articles: [
    {
      source: {
        id: "a",
        name: "Source One"
      },
      author: "Author One",
      title: "Title One",
      url: "http://url1"
    },
    {
      source: {
        id: "b",
        name: "Source Two"
      },
      author: "Author Two",
      title: "Title Two",
      url: "http://url2"
    }
  ]
};

const get_sources = () => {
  jest.fn(() => Promise.resolve({ data: fakeSources }));
};

const get_articles = source =>
  jest.fn(() => Promise.resolve({ data: fakeArticles }));

export { get_sources, get_articles };
