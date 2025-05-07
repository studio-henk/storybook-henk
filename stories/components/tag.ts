// tag.ts
// import "./tag.css";

interface TagProps {
    label: string; // Required label for the tag
    iconSvg?: string; // Optional SVG icon
    iconPosition?: "left" | "right"; // Position of the icon
    size?: "small" | "large";
    variant?: "highlight";
}

export const createTag = ({
    label,
    iconSvg = "",
    iconPosition = "left",
    variant,
    size = "large",
}: TagProps) => {
    const tag = document.createElement("span");

    // Set class names for the tag
    const classNames = ["henk-tag"];
    if (variant) {
        classNames.push(`henk-tag--${variant}`);
    }

    if (size) {
        classNames.push(`henk-tag--${size}`);
    }

    tag.className = classNames.join(" ");

    let iconSize = "";
    if (size === "small") {
        iconSize = "medium";
    } else {
        iconSize = "large";
    }
    // Create icon HTML if iconSvg is provided
    const iconHtml = iconSvg
        ? `<i class="henk-icon icon--${iconSize}">${iconSvg}</i> `
        : "";

    // Add inner HTML based on icon position
    if (iconPosition === "left") {
        tag.innerHTML = `${iconHtml}${label}`;
    } else {
        tag.innerHTML = `${label}${iconHtml}`;
    }

    return tag;
};