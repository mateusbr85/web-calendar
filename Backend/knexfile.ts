import type { Knex } from "knex";
import doteEnvConfig from './src/config/doteEnv';
doteEnvConfig

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: 'postgres://dbtoken_user:5MvkGJbyhcocu0lloCooNOTFHJjU4wdI@dpg-cnqetvmn7f5s73878d40-a.oregon-postgres.render.com/dbtoken',
      ssl: { rejectUnauthorized: false }, // Adicione a opção de SSL aqui
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations"
    },

  },
  production: {
    client: "postgresql",
    connection: {
      connectionString: 'postgres://dbtoken_user:5MvkGJbyhcocu0lloCooNOTFHJjU4wdI@dpg-cnqetvmn7f5s73878d40-a.oregon-postgres.render.com/dbtoken',
      ssl: { rejectUnauthorized: false }, // Adicione a opção de SSL aqui
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations"
    }
  }

};

export default config;
