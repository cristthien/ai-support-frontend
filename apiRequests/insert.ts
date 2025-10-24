import http from "@/lib/http";
import { QaRequest, RAGResponse } from "@/schemaValidation/chat.schema";
import { InsertRequest } from "@/schemaValidation/insert.schema";

const insertApiRequest = {
  insert: (body: InsertRequest) => http.post<any>("/insert", body),
};

export default insertApiRequest;
