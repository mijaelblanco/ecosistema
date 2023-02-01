module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '146.190.148.159'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ecosistema'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Blanco123$'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
