module.exports = {
  reactStrictMode: false,

  env: {
    MONGO_URI:
      "mongodb://login:pwd@localhost:port/bddname",
    BASE_URL: process.env.BASE_URL,
  },
};
