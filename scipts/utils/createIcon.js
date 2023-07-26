export default function createIcon(...classNames) {
    const icon = document.createElement("i");
    icon.classList.add(...classNames);
    return icon;
}
