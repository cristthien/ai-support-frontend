import { z } from "zod";

export const SourceSchema = z.object({
  text: z.string(),
  meta: z.object({
    source: z.string(),
    chunk_id: z.number(),
  }),
});

export const RAGResponseSchema = z.object({
  answer: z.string(),
  sources: z.array(SourceSchema),
});
export type RAGResponse = z.infer<typeof RAGResponseSchema>;

export const QaRequestSchema = z
  .object({
    message: z.string().trim().min(1, "question không được để trống"),
  })
  .strict();
// inferred Type
export type QaRequest = z.infer<typeof QaRequestSchema>;
