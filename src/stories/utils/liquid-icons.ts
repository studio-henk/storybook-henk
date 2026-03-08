// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

export const getIconNames = () =>
  Object.keys(engine.__svg_map || {})
    .map((f) => f.replace(/\.svg$/i, ""))
    .sort();
