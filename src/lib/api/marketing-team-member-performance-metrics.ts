import { apiRequest } from "./client";
import type { ApiSuccessResponse } from "./marketing-team-member-activities";

/** Locked contract path — do not rewrite. */
export const MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH =
  "/api/v1/marketing-team-member/performance-metrics" as const;

export interface PerformanceMetricItem {
  activity_id: string;
  revenue: number;
  open_rate: number;
  clicks: number;
  click_rate: number;
  campaign_code: string;
  delivered_orders: number;
  title: string | null;
  description: string | null;
  matched: boolean | null;
  image_url?: string | null;
}

export interface PerformanceMetricsData {
  metrics: PerformanceMetricItem[];
  page: number;
  limit: number;
  total: number;
  retrieval_status: string;
  description: string;
  export_status: string;
  error_message: string | null;
}

export type PerformanceMetricsResponse = ApiSuccessResponse<PerformanceMetricsData>;

export interface PerformanceMetricsQueryParams {
  campaign_code?: string;
  year?: string;
  page?: string;
  limit?: string;
}

function performanceMetricsPath(params?: PerformanceMetricsQueryParams): string {
  if (!params) {
    return MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH;
  }
  const search = new URLSearchParams();
  if (params.campaign_code !== undefined && params.campaign_code !== "") {
    search.set("campaign_code", params.campaign_code);
  }
  if (params.year !== undefined && params.year !== "") {
    search.set("year", params.year);
  }
  if (params.page !== undefined && params.page !== "") {
    search.set("page", params.page);
  }
  if (params.limit !== undefined && params.limit !== "") {
    search.set("limit", params.limit);
  }
  const query = search.toString();
  return query
    ? `${MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH}?${query}`
    : MARKETING_TEAM_MEMBER_PERFORMANCE_METRICS_PATH;
}

/** GET /api/v1/marketing-team-member/performance-metrics */
export async function getMarketingTeamMemberPerformanceMetrics(
  params?: PerformanceMetricsQueryParams,
  token?: string | null,
) {
  return apiRequest("GET", performanceMetricsPath(params), undefined, token);
}
