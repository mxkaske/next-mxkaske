import { createClient } from "contentful";
import { IBlog, ISocialLink } from ".contentful/generated/types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getEntries() {
  return await client.getEntries();
}

async function getEntriesByType<T>(type: string) {
  return (
    await client.getEntries<T>({
      content_type: type,
    })
  ).items;
}

async function getBlogPosts() {
  return await getEntriesByType<IBlog>("blog");
}

async function getSocialLinks() {
  return await getEntriesByType<ISocialLink>("social-link");
}

export { client, getEntries, getBlogPosts, getSocialLinks };
