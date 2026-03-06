import engine from "@src/liquid-engine.js";
import snippet from "../snippets/test-liquid.liquid?raw";

export default {
  title: "Test/LiquidJS",
};

export const Basic = {
  args: {
    message: "hello world",
  },
  argTypes: {
    message: { control: "text" },
  },
  render: (args) => {
    const rendered = engine.parseAndRenderSync(snippet, {
      message: args.message,
    });
    const div = document.createElement("div");
    div.innerHTML = rendered;
    return div;
  },
};
