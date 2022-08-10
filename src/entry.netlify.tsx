import render from "./entry.ssr";
import { qwikCity } from "@builder.io/qwik-city/middleware/netlify-edge";

const qwikCityHandler = qwikCity(render);

export default (re: any, op: any) => {
  const request = new Proxy({
    headers: re.headers
  }, {
    get(target: any, prop) {
      return target[prop] || re[prop]
    }
  })
  return qwikCityHandler(request, op);
};
