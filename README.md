## Auth

Started with `npx create-next-app@latest` , then added Next-Auth to an [existing project](https://next-auth.js.org/getting-started/example#existing-project).

Integrate [Prisma](https://next-auth.js.org/adapters/prisma) with the schema for a local SQLite database.
It has tables to store accounts, users, sessions data for those that authenticate and login.

Initial setup with Github OAuth. Options for alternate OAuth logins(Email, Apple, Google, Facebook, Twitter) but need to setup developer keys and add secrets to local env file. 

Login persists across changing pages and closing localhost tab.

Sqlite with WAL mode enabled to expose write-ahead-log(WAL) and shared-memory(SHM) files. Allows for backup via [Litestream](https://litestream.io/guides/docker/). Alternatively you can use a [CRON-based backup](https://litestream.io/alternatives/cron/) for smaller databases with less durable requirements.

## Run Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

