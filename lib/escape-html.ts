const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
}

export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return ""
  return String(value).replace(/[&<>"'/]/g, (char) => HTML_ESCAPES[char] ?? char)
}
