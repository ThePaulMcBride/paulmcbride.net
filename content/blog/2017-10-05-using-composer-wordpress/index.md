---
slug: 'using-composer-wordpress'
date: '2017-10-05'
title: 'Using Composer with WordPress'
description: "Today we're going to discuss how to use the PHP package manager, Composer with WordPress, the CMS that powers over 20% of the internet."
banner: './images/using-composer-with-wordpress.jpg'
tags: ['php']
published: true
---

Today we're going to discuss how to use the PHP package manager, Composer with WordPress, the CMS that powers over 20% of the internet.

Composer is the most popular dependency manager in the PHP ecosystem. In modern web development, it is incredibly common to write code that depends on one or more 3rd party libraries. Composer allows you to define and install these dependencies in a `composer.json` file.

Composer offers many of the same benefits as npm. You can keep your dependencies out of version control, install or update them. programmatically and make your whole project more portable.

To get started with composer, visit [getcomposer.org](https://getcomposer.org)

## Why use Composer With WordPress

The first thing that comes to mind when talking about the dependencies of a WordPress site is usually plugins. You don't get far with WordPress without the help of plugins. However, WordPress itself can be thought of as a dependency.

This is where [Bedrock](https://roots.io/bedrock/) comes in. Bedrock is a project designed to help you build WordPress websites that are better structured and more secure.

If you have ever worked on a Laravel project, Bedrock won't look too unfamiliar. This is how a project is generally structured.

```bash
├── composer.json
├── config
│ ├── application.php
│ └── environments
│ ├── development.php
│ ├── staging.php
│ └── production.php
├── vendor
└── web
├── app
│ ├── mu-plugins
│ ├── plugins
│ ├── themes
│ └── uploads
├── wp-config.php
├── index.php
└── wp
```

WordPress is stored in the `wp` directory and the directory usually called `wp-content` is now called `app`.

This structure brings with it a few advantages.

- Firstly, it allows you to keep sensitive configuration files out of the web root directly.
- Your theme and content is kept entirely separate from WordPress core
- As mentioned earlier, plugins and WordPress are now defined in the `composer.json` file, so they don't need to be checked into source control.

## Conclusion

I've been using Bedrock for my WordPress builds for years and cannot sing its praises highly enough. If you have never used composer before, there may be a slight learning curve, but I promise you it will be worth it. Composer is also an integral part of pretty much every big PHP framework, so learning how to use it is essential if you plan on working with [PHP](/whats-new-in-php7/).

If you are using WordPress and Composer in another way then get in touch, I'd love to hear about it.
