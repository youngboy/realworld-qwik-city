import render from './entry.ssr';
import { qwikCity } from '@builder.io/qwik-city/middleware/netlify-edge';

const qwikCityHandler = qwikCity(render);

export default (re: any, op: any) => {
  return qwikCityHandler(re, op)
} ;
