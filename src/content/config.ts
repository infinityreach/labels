import { defineCollection, z } from "astro:content";

const designer = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
  }),
});

export const collections = {
  designer,
};
