import { createBaseLayout } from "@stories/templates/BaseLayout";
import { createHeader } from "@stories/TheHeader";
import { TheFooter } from "@stories/TheFooter";

interface PageTemplateProps {
  mainContent: () => HTMLElement | DocumentFragment; // now a function
  headerProps?: Parameters<typeof createHeader>[0];
  footerProps?: Parameters<typeof TheFooter>[0];
}

export function createPageTemplate({
  mainContent,
  headerProps,
  footerProps,
}: PageTemplateProps): HTMLElement {
  const header = createHeader(headerProps || {});
  const footer = TheFooter(footerProps || {});
  const content = mainContent(); // call the function to get the main content
  return createBaseLayout({ header, mainContent: content, footer });
}
