# simplePostsApp
## Description

[Live Demo](https://simple-posts-4f5mlnlz4-abdullah-kassems-projects.vercel.app)

A simple SPA Next.js app for displaying posts. It has 2 main pages, a post listing page and a favorites posts page and the user should be able to favorite posts.

This is my first Next.js app. I learnt Next.js and made this app, all in the span of 7 days.

## Background/Motivation
- My target is to build a Single Page Application (SPA) using Next.js
    - I struggled at first because after searching online I found different and often conflicting definitions of what a SPA is.
    - The "old school" SPA definition is 
        >SPA would be an application that handles all data fetching, rendering, and routing entirely client-side". [[1]](#references)
    - Other definitions that are more flexible, like 
        >A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. [[2]](#references)

- According to my understanding and research, by sticking with the first definition, I would have to use the reactRouter for example, however doing so is not advisable in Next.js as it will mean that I am not utilizing the main benefits of Next.js and not using it properly.

- So I decided that I will perform client side routing using [Next/Link component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component).
This will allow me to achieve client side navigation, while still being able to make use of Next.js's prefetching and server side rendering(SSR).

- Since no new documents will be loaded during page navigation, that means that my app still qualifies to be a SPA.

## Features

- You can Like posts and the liked posts will be saved locally so next time you visit it will still be there.
- Favorites Page containing the liked posts.
- Responsive Design (Mobile First Approach)
- Lazy Loading and Suspense to improve both the initial load time and user experience.
- Client side routing for an SPA feel.
- Custom APIs to fetch posts, this way client side data fetching, SSG, and SSR are possible to implement. (I used Client Side fetching)

## Future improvements
- Improve website performance
- Add more functionalities 
- Make design more interactive.


<!-- I got the getting started section from https://github.com/ixartz/Next-js-Boilerplate/blob/main/README.md?plain=1 -->

### Requirements

Node.js and npm

### Getting Started 


```shell
git clone https://github.com/abdullahkassem/simplePostsApp my-project-name
cd my-project-name/my-post-app
npm install
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Deploying


```shell
$ npm run build
```

It generates an optimized production build. For testing the generated build, you can run:

```shell
$ npm run start
```



## References
1. [ Building a single-page application with Next.js and React Router](https://colinhacks.com/essays/building-a-spa-with-nextjs)

2. [What Are Single Page Applications](https://www.bloomreach.com/en/blog/2018/what-is-a-single-page-application)


