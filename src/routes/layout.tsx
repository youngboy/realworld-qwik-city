import {
  component$,
  Host,
  useClientEffect$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { components } from "~/libs/api-schema";
import { SessionContext } from "~/libs/context";
import { getSession } from "~/libs/getSession";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

// FIXME: there's some issues need to investigate or report
// - resource being override by page level endpoint
// - thus requiring the route defined get endpoint also including user props
export interface EndpointData {
  user?: components["schemas"]["User"];
}

// TODO: layout's endpoint not properly supported yet
export const onGet: RequestHandler<EndpointData> = ({ request }) => {
  const { user } = getSession(request.headers.get("cookie"));
  return {
    user,
  };
};

export default component$(() => {
  const resource = useEndpoint<typeof onGet>();
  const session = useStore({
    loaded: false,
    user: undefined,
  } as any);
  useContextProvider(SessionContext, session);
  useClientEffect$(() => {
    resource.promise
      .then((data: any) => {
        session.user = data?.user;
        session.loaded = true;
      })
      .catch((e: any) => {
        session.loaded = true;
      });
  });
  return (
    <Host>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </Host>
  );
});
