// @ts-ignore - liquid-engine.js has no types
import engine from "@src/liquid-engine.js";

type LiquidComponentOptions = {
  template: string;
  props?: Record<string, any>;
  context?: Record<string, any>;
};

export function renderLiquidComponent({
  template,
  props = {},
  context = {},
}: LiquidComponentOptions) {
  return engine.parseAndRenderSync(template, { ...context, ...props });
}
