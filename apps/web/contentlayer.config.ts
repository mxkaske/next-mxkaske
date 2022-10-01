import { defineDocumentType, makeSource } from "contentlayer/source-files";
import prism from "rehype-prism-plus";
import readingTime from "reading-time";

// LATER: add Project (/building/*md)
// where I describe the things build

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "writing/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true,
    },
    // highlight: {
    //   type: "boolean",
    //   description: "Publish the post on home page",
    //   required: false,
    // },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
    },
    readingTime: {
      type: "string",
      resolve: (_) => readingTime(_.body.raw).text,
    },
  },
}));

export const CV = defineDocumentType(() => ({
  name: "CV",
  filePathPattern: "cv/**/*.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      description: "The title",
      required: true,
    },
    from: {
      type: "date",
      description: "The starting date",
      required: true,
    },
    to: {
      type: "date",
      description: "The ending date",
      required: true,
    },
    where: {
      type: "string",
      description: "The company, school or institution",
      required: true,
    },
    what: {
      type: "string",
      description: "The position or title",
      required: true,
    },
    url: {
      type: "string",
      description: "The link to the company if needed",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
    },
    event: {
      type: "enum",
      options: ["education", "work-experiences", "projects"],
      resolve: (_) => _._raw.sourceFileDir.replace("cv/", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, CV],
  mdx: { rehypePlugins: [prism] },
});
