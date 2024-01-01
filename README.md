This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# FACEBOOK Messenger Clone project

## Description

Facebook Messenger Clone App that allows for real time messessing

## Technologies Used

## Next.js 13

- Utilizing app router for efficient routing and dynamic page render

## React.js

- reusable components used as backbone of dynamic app

## Tailwindcss / headless UI

- allows creation of sleek UI with seemless user experience

## Prisma / MongoDB

- allows for efficient and scalable database solution to handle multiple users

## NextAuth

- Handles security and authentication for user accounts. Allows

## Pusher

- allows for real time messaging and notification

## Cloudinary

- Handles Image Uploading

## Vercal

- Hosting (Look into how to host on Docker)

## Notes for self:

1. app folder contains all the files of each page
2. (index) in the app folder indicates that this is the index page/main route
3. src for all file is relative the app folder so if you want app/images/logo.png do /images/logo.png
4. "use client"; on top of each component that is interactive and DO NOT WANT to be client side
5. For the MongoDB prisma set up
   a. npm install -D prisma installs dependences
   b. npx prisma init
   c. npx prisma db push (pushes schema to online cluster)
   d. npm install next-auth@latest @prisma/client @next-auth/prisma-adapter bcrypt (dependences for next authentication)
   e. npm install -D @types/bcrypt
