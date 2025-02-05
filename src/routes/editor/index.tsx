import { component$ } from "@builder.io/qwik";
import { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import * as api from "~/libs/api";
import { getSession } from "~/libs/getSession";
import { Form, getFormData } from "./_form";

export const onGet: RequestHandler = async ({ request, response }) => {
  const { user } = getSession(request.headers.get("cookie"));
  if (!user) {
    throw response.redirect("/login", 302);
  }
  return {
    user,
  };
};

export const onPost: RequestHandler = async ({ request, response }) => {
  const formData = await request.formData();
  const { user } = getSession(request.headers.get("cookie"));
  if (!user) {
    throw response.redirect("/login", 302);
  }
  const result = await api.post(
    "articles",
    {
      article: getFormData(formData),
    },
    user.token
  );

  // TODO: error not consumed yet
  if (result.errors) {
    return { errors: result.errors };
  }
  throw response.redirect(`article/${result.article.slug}`, 302);
};

export default component$(() => {
  return (
    <Form
      method="post"
      article={{
        title: "",
        description: "",
        body: "",
        tagList: [],
      }}
    />
  );
});

export const head: DocumentHead = {
  title: "Editor -- Conduit",
};
