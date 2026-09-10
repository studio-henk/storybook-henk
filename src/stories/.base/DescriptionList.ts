export interface DLItem {
  term: string;
  description: string;
}

export interface CreateDescriptionListOptions {
  items: DLItem[];
  className?: string;
}

export const createDescriptionList = ({
  items,
  className = "henk-dl",
}: CreateDescriptionListOptions): HTMLDListElement => {
  const dl = document.createElement("dl");
  dl.className = className;

  for (const { term, description } of items) {
    const dt = document.createElement("dt");
    dt.textContent = term;
    dt.className = "henk-dl__term";

    const dd = document.createElement("dd");
    dd.textContent = description;
    dd.className = "henk-dl__description";

    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  return dl;
};
