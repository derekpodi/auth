## Auth

From Init create-next-app, add Next-Auth to an [existing project](https://next-auth.js.org/getting-started/example#existing-project).

Next, integrate [Prisma](https://next-auth.js.org/adapters/prisma) with the schema for a local SQLite database.
It has tables to store accounts, users, sessions data for those that authenticate and login.

Initial setup with github OAuth, but options for alternate OAuth logins(Google, Facebook, Twitter). Email login a work in progress for secure storage.

Login persists across changing pages and closing localhost tab.

## Run Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.