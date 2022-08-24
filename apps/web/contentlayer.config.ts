import { defineDocumentType, makeSource } from "contentlayer/source-files";
import prism from "rehype-prism-plus";
import readingTime from "reading-time";

// LATER: add Project (/building/*md)
// where I describe the things build

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "writing/*.mdx",
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

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  markdown: { rehypePlugins: [prism] },
});
