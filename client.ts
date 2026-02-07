import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'ft8r5wu8',
  dataset: 'production',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: 'your-sanity-token', // or token from environment variable
})