---
title: "Create a blog post page with ease"
date: "2021-12-24"
excerpt: "Develop a post page in 5 min with ease"
---

## Create a blog post page with ease

We are using the following stack to provide a maximum of DX and a minimum of code!

- **Nextjs** does not have the be explained. The go to for any React project.
- **Tailwindcss** is the same. The markdown/html can be customized with their new released _@tailwindcss/typography_ utility classes. The result can be seen on this page!
- **Contentlayer (alpha)**: First seen on [leerob.io](https://github.com/leerob/leerob.io) personal site as well as [ped.ro](https://github.com/peduarte/ped.ro)'s website, it removes a lot of boilerplate functions that should have been written to use the `Post` types in any typescript project and ships with an `allPosts` array that removes the need to write a `fs.readdirSync(directory)` as well as the need to read the post file with `fs/readFileSync(pathToFile)` and transform it with `gray-matter`. It's like magic.
- **Vercel**: Seemless deployment. On `next build`, `contentlayer` will automatically create a `.contentlayer` folder with all required types and data.

`... contentlayer.config.js`

![image info](/assets/contactdiary.png)

Importantly, [Next.js](https://nextjs.org/) lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

```ts
const getContent = (slug: string) => {
  return allPosts.find((post) => post.slug === slug);
};
```

> Styling the list dots with `marker:text-indigo-500` is not enough. You need to style the default text with `text-gray-500`!!!
