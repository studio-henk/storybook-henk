import { Liquid } from "liquidjs";

const engine = new Liquid();

engine.registerFilter("asset_url", (filename) => `/assets/${filename}`);

export default engine;
