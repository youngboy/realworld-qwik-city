import type { RequestHandler } from "@builder.io/qwik-city";
import * as api from "~/libs/api";
import { getSession } from "~/libs/getSession";

export const onPost: RequestHandler = async ({ request, params, response }) => {
  const formData = await request.formData();
  const { user } = getSession(request.headers.get("cookie"));
  const result = await api.post(
    `articles/${params.slug}/comments`,
    {
      comment: {
        body: formData.get("body"),
      },
    },
    user.token
  );
  if (result.errors) {
    // TODO: how to deal this?
    throw new Error("not implement");
  }
  return response.redirect(`/article/${params.slug}`, 303);
};
