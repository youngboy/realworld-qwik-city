import type { RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler = async ({ request, response }) => {
  response.headers.set(
    "Set-Cookie",
    "jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  );
  return {
    ok: true,
  };
};
