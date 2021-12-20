import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.md",
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
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
    },
    // readingTime: {
    //   type: "json",
    //   resolve: (_) => readingTime(_.body.raw, { wordsPerMinute: 300 }),
    // },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  markdown: { rehypePlugins: [highlight] },
});
