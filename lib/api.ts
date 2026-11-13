import { siteConfig } from "./site-config";

export type EnquiryPayload = { name: string; email: string; phone: string; message: string };

/**
 * Single place to connect the Flask backend later.
 * Expected endpoint: POST {apiUrl}/api/enquiries  (JSON body = EnquiryPayload)
 * Returns "unconfigured" while NEXT_PUBLIC_API_URL is unset.
 */
export async function submitEnquiry(data: EnquiryPayload): Promise<"sent" | "unconfigured" | "error"> {
  if (!siteConfig.apiUrl) return "unconfigured";
  try {
    const res = await fetch(`${siteConfig.apiUrl}/api/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok ? "sent" : "error";
  } catch {
    return "error";
  }
}
