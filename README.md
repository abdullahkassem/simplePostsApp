# simplePostsApp
## Description
A simple SPA Next.js app for displaying posts. It has 2 main pages, a post listing page and a favourite posts page and the user should be able to favourite posts.

## Background/Motivation
- My target is to build a Single Page Application (SPA) using Next.js
    - I struggled at first because after searching online I found different and often conflicting definitions of what a SPA is.
    - The "old school" SPA definition is 
        >SPA would be an application that handles all data fetching, rendering, and routing entirely client-side". [[1]](#references)
    - Other definitions that are more felxible, like 
        >A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. [[2]](#references)

- According to my understanding and research, by sticking with the first definition, I would have to use the reactRouter for example, however doing so is not advisable in Next.js as it will mean that I am not utilizing the main benifits of Next.js and not using it properly.

- So I decided that I will perform client side routing using [Next/Link component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component).
This will allow me to acheive client side navigation, while still being able to make use of Next.js's prefetching and server side rendering(SSR).

- Since no new doccuments will be loaded during page navigation, that means that my app still qualifies to be a SPA.


<!-- I got the getting started section from https://github.com/ixartz/Next-js-Boilerplate/blob/main/README.md?plain=1 -->

### Requirements

Node.js and npm

### Getting Started 


```shell
git clone https://github.com/abdullahkassem/simplePostsApp my-project-name
cd my-project-name
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


