import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: "data",
            source: "projects/**.json",
            schema: z.object({
                ordering: z.number(),
                slug: z.string(),
                title: z.string(),
                label: z.string(),
                imageUrl: z.string()
            })
        })
    }
});