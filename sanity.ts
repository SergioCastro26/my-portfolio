import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5kp9o42u",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03",
    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);