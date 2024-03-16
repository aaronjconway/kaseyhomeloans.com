import { defineCollection, z } from 'astro:content';

//pages in the learn content folder = equivalent to blog
const learnCollection = defineCollection({
  schema: z.object({
    //todo set a length for the title and sesc
    // title: z.string().max(50),
    // description: z.string().max(70),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    author: z.string(),
    categories: z.array(z.string()).default(['Misc']),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional()
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const categoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    categories: z.array(
      z.object({
        title: z.string(),
        summary: z.string(),
        subtitle: z.string(),
        path: z.string(),
      })
    ),
  }),
});

// Export collections
export const collections = {
  learn: learnCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  categories: categoriesCollection,
};
