module.exports = {
  reactStrictMode: false,

  env: {
    MONGO_URI:
      "mongodb://login:pwd!@localhost:27017/portfolio",
    BASE_URL: process.env.BASE_URL,
  },
};
