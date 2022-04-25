module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://nextjs-strapi-blog.herokuapp.com"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
