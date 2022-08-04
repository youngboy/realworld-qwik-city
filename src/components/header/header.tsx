import { component$, Host, useContext } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";
import { SessionContext } from "~/libs/context";

export default component$(
  () => {
    const pathname = useLocation().pathname;
    const session = useContext(SessionContext);
    return (
      <Host>
        <nav class="navbar navbar-light">
          <div class="container">
            <Link class="navbar-brand" href="/">
              conduit
            </Link>
            <ul class="nav navbar-nav pull-xs-right">
              <li class="nav-item">
                <Link
                  href="/"
                  class={{ "nav-link": true, active: pathname === "/" }}
                >
                  Home
                </Link>
              </li>
              {session.user ? (
                <>
                  <li class="nav-item">
                    <Link
                      href="/editor"
                      class={`nav-link ${
                        pathname.startsWith("/editor") ? "active" : ""
                      }`}
                    >
                      <i class="ion-compose"></i>&nbsp;New Article
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={`nav-link ${
                        pathname.startsWith("/settings") ? "active" : ""
                      }`}
                      href="/settings"
                    >
                      <i class="ion-gear-a"></i>&nbsp;Settings
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      href={`/profile/@${session.user.username}`}
                      class="nav-link"
                    >
                      {session.user.username}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link
                      class={`nav-link ${
                        pathname.startsWith("/login") ? "active" : ""
                      }`}
                      href="/login"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={`nav-link ${
                        pathname.startsWith("/register") ? "active" : ""
                      }`}
                      href="/register"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </Host>
    );
  },
  {
    tagName: "header",
  }
);
