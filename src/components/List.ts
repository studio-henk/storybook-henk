type ListType = "ul" | "ol";
type MarkerType = 'disc' | 'checkmark' | 'plus' | 'min' | 'em-dash' | 'no-bullets';

export interface CreateListOptions {
    listType?: ListType;
    markerType?: MarkerType;
    items?: string[];
}

export const createList = ({
    listType = "ul",
    markerType = "disc",
    items = ["item 1", "item 2"],
}: CreateListOptions): HTMLUListElement | HTMLOListElement => {
    const list = document.createElement(listType) as HTMLUListElement | HTMLOListElement;

    for (const item of items) {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    }

    const classNames = ["henk-list"];
    if (listType === "ul" && markerType) {
        classNames.push(`henk-list--${markerType}`);
    }

    list.className = classNames.join(" ");
    return list;
};