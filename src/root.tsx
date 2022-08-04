import { Html } from "@builder.io/qwik-city";
import { Head } from "./components/head/head";
import { RouterOutlet } from "@builder.io/qwik-city";

export default () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <RouterOutlet />
      </body>
    </Html>
  );
};
