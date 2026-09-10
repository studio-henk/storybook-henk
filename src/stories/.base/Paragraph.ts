
export interface BaseParagraphOptions {
    variant?: string;
    text: string;
}

export const createBaseParagraph = ({
    variant = "",
    text,
}: BaseParagraphOptions): HTMLParagraphElement => {
    const baseParagraph = document.createElement("p");
    baseParagraph.innerHTML = text;

    if (variant) {
        baseParagraph.setAttribute("data-variant", variant);
    }

    return baseParagraph;
};