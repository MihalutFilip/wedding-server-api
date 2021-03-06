import * as dotenv from 'dotenv';
dotenv.config();

export const serverConfig: Record<string, string | number> = {
  API_BASE_PATH: process.env.API_BASE_PATH || '/api',
  PORT: process.env.PORT || 80,
  DATABASE_URI: process.env.MONGODB_URI || 'mongodb://localhost/wedding-app'
};
