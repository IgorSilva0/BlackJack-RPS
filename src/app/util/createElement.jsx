export const createEl = (any, text, cls, id) => {
    const el = document.createElement(`${any}`);
    if (text) {
      el.textContent = `${text}`;
    }
    if (cls) {
      el.classList.add(`${cls}`);
    }
    if (id) {
      el.id = `${id}`;
    }
    return el;
}