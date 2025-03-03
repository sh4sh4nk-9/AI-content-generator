import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials:{
    url: 'postgresql://neondb_owner:npg_rPWACQmh7Z9k@ep-yellow-king-a8njqu8j-pooler.eastus2.azure.neon.tech/Ai-Content-Generator?sslmode=require'
  }
});
