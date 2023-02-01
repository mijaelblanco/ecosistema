module.exports = ({ env }) => ({
  host: env('HOST', '146.190.148.159'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
