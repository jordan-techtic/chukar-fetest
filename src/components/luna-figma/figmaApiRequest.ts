/** luna-spec-codegen: data-hook — contract paths joined to NEXT_PUBLIC_API_BASE_URL. */
import apiClient from "@/lib/api/client";

export async function apiRequest(
  method: string,
  path: string,
  body?: unknown,
  params?: Record<string, string | number | boolean | undefined>,
): Promise<unknown> {
  const response = await apiClient.request({
    method: method.toLowerCase(),
    url: path,
    data: body,
    params,
  });
  return response.data;
}
