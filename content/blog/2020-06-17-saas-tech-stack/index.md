---
slug: 'saas-tech-stack'
date: '2020-06-17'
title: 'My SaaS Tech Stack'
description: 'A look into the tech choices I made when building the job boards, WeCode NI and WeCode Remote.'
tags: ['tech', 'javascript']
banner: './images/success.jpg'
published: true
---

Building software involves a lot of compromise. Everything has pros and cons. In this article I’d like to share what I used to build [WeCode NI](https://wecodeni.com) and [weCode Remote](https://wecoderemote.com). Both job boards are essentially the same and use very similar tech.

## Hosting

When picking a hosting provider, I have a few requirements. Basically I want it to be affordable and convenient. I do not want to be managing a server or worrying about uptime. For most of the work I do these days, a serverless solution works best.

That's why for hosting, I use [Vercel](https://vercel.com). Vercel is a serverless hosting platform with a generous free tier. I can push my code to Github and a few minutes later, it’s live. My pull requests get deployed to staging urls for me to test and I can have multiple environments each with different configurations.
The whole platform is backed by a smart CDN which helps static sites perform even better and ensures that my sites are always snappy and reliable.

## Framework

When building a job board, server rendered HTML is very important for SEO. It puts you in control of how search engines see your pages.

My framework of choice is [Next.js](https://nextjs.org). Next.js is a fullstack JavaScript framework from the same folks that make Vercel. It can be used to build dynamic sites, static sites, APIs and projects that mix them all together.

One of the reasons I use Next.js is for its static regeneration feature. I can create a static page at build time but ensure it is always up-to-date by rebuilding in the background. Next.js makes this really easy to do. Check out the homepage or any job page on weCode Remote or WeCode NI to see it in action.

I use the Next.js API routes to power a GraphQL endpoint. This endpoint is what powers the admin interface and is consumed by all the job pages too.

## Data

Firebase is where all of my data lives. I use Firestore via the Firebase Admin SDK. I don’t use Firestore in the traditional way from the front end, it’s all handled from the server. Firebase has been a really great choice for the database as it’s quick and cheap to get started.

## Authentication

When picking an auth provider I wanted a turnkey solution. There are a lot of moving parts, from account creation to password resets.

As I am already using Firebase for my data and meets all my requirements, it handles my auth too. It is a really great tool that supports social login from the likes of Google, Apple or Twitter and requires very little code to get started. I have intentionally not provided a login method that requires a password as that would be more for me to maintain. Instead, users can log in with a social provider, or by using their email to get a magic login link.

## Payments

You’ll not be surprised to hear that my payments are handled by Stripe. I use Stripe Checkout. This is a prebuilt UI for taking card payments. When a user is ready to pay, I redirect them to a checkout page on Stripe where the transaction is handled. This way, a user never enters payment details on my site. Ensuring a website meets the legal requirements to process payments is hard, so I’ve left that liability in Stripe’s capable hands. When Stripe successfully charges the user, they send me a webhook and the user’s draft job goes live.

## Regrets

While I love all the tools I’ve used for building [weCode Remote](https://wecoderemote.com) and [WeCode NI](https://wecodeni.com), there are some things that aren’t perfect. For me, the biggest pain point when working on these projects always come from Firebase. The client side auth library is 54kB gzipped, which is a lot of code for the relatively few users who need it. If I was to start over, I’d probably use Auth0.

Firestore is the other part of this tech stack that I would swap out of starting over. It is a noSQL type database which charges you per document read. This means pulling together reports based on the data can be expensive. It’s also difficult to export data from Firestore. I would like to move to a Postgres database sitting behind Prisma. I’d looked into this when I was first getting started, but Prisma was still in beta and the API was changing too regularly.

What do you think? What tools would you use to build a job board like this?
