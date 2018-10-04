---
path: "/switched-atom-vs-code"
date: "2017-11-02T09:00:00.000Z"
title: "Why I switched from Atom to VS Code"
featuredImage: "./images/why-i-switched-to-vs-code.png"
tags: ["javascript", "tools"]
---

A few months ago I wrote about the best packages for Atom. A few weeks later I wrote about front-end tools and how great Atom was. Today, I'm going to tell you about why I switched from Atom to Visual Studio Code.

I all started a few weeks ago after listening to an episode of Syntax. In the episode, Wes Bos, a long time Sublime Text user talked about how VS code had swayed him to jump ship. He talked about how the performance was almost as good as Sublime, but the UI was far superior.

I was interested, but I was an Atom user. I loved Atom, I wanted to love Atom. Sure, it had its problems, it could be slow, it would choke on large files but it was built by Github.

## Why did I switch?

There is no one thing that made me switch to VS Code. Instead, it was a combination of its great features and a few of Atom's pain points. I'll talk about the main reasons I switched.

### Speed

The thing I noticed most when switching to VS Code is how quickly it starts up. When opening a large CSV file, VS Code could have it loaded and ready to edit in half the time it would take Atom.

VS Code isn't just faster to boot either, I noticed it everywhere. It feels smoother when scrolling, syntax highlighting is snappier and everything else just feels quicker.

### UI

The UI is quite different from Atom out of the box. By default, VS Code has a vertical menu located to the far left of the UI. It allows for one-click access to the file tree, the search tools, version control tools, debug setting and the plugin system. Keyboard shortcuts are also available for each of these.

### Ecosystem

The VS Code ecosystem, although less mature than Atom's is still vibrant. Many big names in the web development world have switched to VS Code. As with Atom, there are plugins for pretty much everything you can imagine. The problem is finding plugins. Which leads me on to the things about VS Code I'm not in love with.

## What isn't so great about VS Code?

VS Code is brilliant, it's not without a few problems though.

### Plugin Discoverability

In VS Code, plugins are called extensions and there are a lot of extensions. Finding useful, well-designed extensions, however, isn't as easy as it should be.

Unlike Atom which dedicates the full interface to showcasing plugins, VS code has them tucked away in the sidebar. Plugin descriptions in this sidebar are limited to a single line which often means they are truncated. Without clicking on each plugin, it's hard to tell what they do.

VS Code has "Recommended Plugins" which I believe suggests plugins based on what you already have installed, but I've not found the suggestions to be particularly useful.

### Default Keymappings

This is a minor irk. One which is easily resolved, but it's worth noting if you are not someone who is going to take the time to customise your key mappings. Some of the default keymappings in VS Code are unusual. For example, to hide and show the explorer/file tree, the default shortcut is `shift + cmd + e`. What was wrong with `cdm + \` that is used everywhere else?

## Recommended Plugins

### Cobalt2 Theme Official

The Cobalt2 Theme was created by Wes Bos himself. It's beautiful, supports italic fonts and is easy on the eyes. It is just a theme, so it's hardly essential for writing code, but it doesn't hurt to have a gorgeous editor.

https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2

### Prettier

Prettier is one of my favourite plugins. It can auto format your code as you type or on save. It's not very configurable and I don't agree with all of its default settings, but it saves from making decisions on how my code is styled and formatted. When used on a team, it almost eliminates the need for eslint style rules.

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### Highlight Matching Tag

This is plugin adds a feature I was surprised isn't included by default in VS Code. It highlights the closing tag of an HTML element when the opening one is selected. It's handy for quickly finding issues in HTML or other templating languages.

https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag

## In conclusion

Your editor is the tool you'll use most when coding. It makes sense to have one you know well and is as good as it can be. It never hurts to try a new one to see if it's a better fit for you. Check out VS Code now and let me know what you think.
