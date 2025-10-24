import http from "@/lib/http";
import { QaRequest, RAGResponse } from "@/schemaValidation/chat.schema";

const chatApiRequest = {
  query: (body: QaRequest) => http.post<RAGResponse>("/chat/ask", body),
};

export default chatApiRequest;
