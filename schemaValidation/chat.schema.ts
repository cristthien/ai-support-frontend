import { FileQuestion } from "lucide-react";
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
    question: z.string().trim().min(1, "question không được để trống"),
    query_string: z.string().trim().nullable().optional(),
    top_k: z.number().min(1).max(10).optional().default(3),
  })
  .strict();
// inferred Type
export type QaRequest = z.infer<typeof QaRequestSchema>;
