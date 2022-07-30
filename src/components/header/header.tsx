import { component$, Host } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(
  () => {
    const pathname = useLocation().pathname;
    return (
      <Host>
        <nav class="navbar navbar-light">
          <div class="container">
            <a class="navbar-brand" href="/">
              conduit
            </a>
            <ul class="nav navbar-nav pull-xs-right">
              <li class="nav-item">
                <a
                  href="/"
                  class={{ "nav-link": true, active: pathname === "/" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="/editor"
                  class={`nav-link ${
                    pathname.startsWith("/editor") ? "active" : ""
                  }`}
                >
                  <i class="ion-compose"></i>&nbsp;New Article
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${
                    pathname.startsWith("/settings") ? "active" : ""
                  }`}
                  href="/settings"
                >
                  <i class="ion-gear-a"></i>&nbsp;Settings
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${
                    pathname.startsWith("/login") ? "active" : ""
                  }`}
                  href="/login"
                >
                  Sign in
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${
                    pathname.startsWith("/register") ? "active" : ""
                  }`}
                  href="/register"
                >
                  Sign up
                </a>
              </li>
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
