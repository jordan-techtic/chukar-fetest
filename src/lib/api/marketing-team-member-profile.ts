import apiClient from "@/lib/api/client";

export type MarketingMemberProfile = {
  id: string;
  email: string;
  username: string;
  role: string;
  first_name: string | null;
  last_name: string | null;
  is_active: boolean;
  avatar_url: string | null;
  phone: string | null;
  bio: string | null;
  password_changed_at?: string | null;
};

type ProfileEnvelope = {
  success?: boolean;
  message?: string;
  data?: MarketingMemberProfile;
};

export async function getMarketingMemberProfile(): Promise<MarketingMemberProfile> {
  const response = await apiClient.get<ProfileEnvelope>("/api/v1/marketing-team-member/profile");
  const data = response.data?.data;
  if (!data) {
    throw new Error(response.data?.message ?? "Unable to load profile.");
  }
  return data;
}

export type UpdateMarketingMemberProfileBody = {
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone?: string | null;
  bio?: string | null;
};

export async function updateMarketingMemberProfile(
  body: UpdateMarketingMemberProfileBody,
): Promise<MarketingMemberProfile> {
  const response = await apiClient.put<ProfileEnvelope>(
    "/api/v1/marketing-team-member/profile",
    body,
  );
  const data = response.data?.data;
  if (!data) {
    throw new Error(response.data?.message ?? "Unable to update profile.");
  }
  return data;
}

export async function changeMarketingMemberPassword(body: {
  current_password: string;
  new_password: string;
}): Promise<void> {
  await apiClient.post("/api/v1/marketing-team-member/profile/password", body);
}
