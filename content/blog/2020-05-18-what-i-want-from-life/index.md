---
slug: 'saas-tech-stack'
date: '2020-06-17'
title: 'My SaaS Tech Stack'
description: 'A look into the tech choices I made when building the job boards, WeCode NI and WeCode Remote.'
tags: ['tech', 'javascript']
banner: './images/success.jpg'
published: true
---

Building software involves a lot of compromise. Every thing has pros and cons. Software is no different. In this article I’d like to share what I used to build [WeCode NI](https://wecodeni..com) and [weCode Remote](https://wecoderemote.com). Both job boards are essentially the same and use very similar tech.

## Hosting

For hosting I use [Vercel](https://vercel.com). Vercel is a serverless hosting platform with a generous free tier. I can push my code to Github and a few minute later, it’s live. My pull requests get deployed to staging urls for me to test and I can have multiple “environments”.

The whole platform is backed by a smart CDN which help static perform even better and ensure that my site are always snappy and reliable.

## Framework

My framework of choice is [Next.js](https://nextjs.org). Next.js is a fullstack JavaScript framework from the same folks that make Vercel. It can be used to build dynamic sites, static sites, APIs and projects that mix them all together.

One of the reasons I use Next.js is for its static regeneration feature. I can create a static page at build time but ensure it is always up-to-date by rebuilding in the background. Next.js makes this really easy to do. Check out the homepage or any job page on weCode Remote or WeCode NI to see it in action.

I use the Next.js API routes to power GrahQL endpoint. This endpoint is what powers the admin interface and is consumed by all of the job pages too.

## Data

Firebase is where all of my data lives. I use Firestore via the Firebase Admin SDK. I don’t use Firestore in the traditional way from the front end, it’s all handled from the server. Firebase has been a really great choice for the database as it’s quick and cheap to get started.

## Authentication

Firebase handles my auth system too. It is a really great too that supports social login from the likes of Google, Apple or Twitter and requires very little code to get started. I have intentionally not provided a login method that requires a password as that would be more for me to maintain. Instead users can log in with a social provider, or using their email to get a magic login link.

## Payments

You’ll not be surprised to hear that my payments are handled by Stripe. I use Stripe Checkout. This is a prebuilt UI for taking card payments. When a user is ready to pay, I redirect them to this checkout page on Stripe where the transaction is occurs. This way a user never types payment details in on my site. I don’t want the responsibility of making sure that is a secure as it needs to be.

When Stripe successfully charges the user, they send me webhook and their draft job goes live.

## Regrets

While I love all of the tool I’ve used for building [weCode Remote](https://wecoderemote.com) and [WeCode NI](https://wecodeni.com), there are some things that aren’t perfect. For me, the biggest pain point when working on these projects always come from Firebase. The client side auth library is 54kB gzipped, which is a lot of code for the relatively few users you need it. If I was to start over, I’d probably use Auth0.

Fire store is the other part of this tech stack that I would swap out of starting over. It is a noSQL type database which charges you per document read. This means pulling together reports based on the data can be expensive. It’s also difficult to export data from Firestore. I would like to move to a Postgres database sitting behind Prisma. I’d looked into this when I was first getting started, but Prisma was still in beta and the API was changing too regularly.

What do you think? What tools would you use to build a job board like this?
