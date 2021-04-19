This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy with Docker

- Replace in docker-compose.yaml YOURDOMAIN with your domain and build then your docker image 

<div class="termy">

```console
$ docker build . -t frontend

$ docker-compose up -d

```
</div>



You can edit most colors in `config.ts`, except background color, please do it in `styles/globals.css`
