import { APP_SCOPES, ScopeKey } from "./constants";

export function addElement(
  pParent: HTMLElement,
  eType: string,
  eClass: string,
  eContent: string,
): HTMLElement {
  const pElement = document.createElement(eType);
  pParent.appendChild(pElement);
  if (eClass) pElement.classList.add(eClass);
  if (eContent) pElement.textContent = eContent;
  return pElement;
}

export function addImgElement(
  pParent: HTMLElement,
  eClass: string,
  eSrc: string,
  eAlt: string,
): HTMLImageElement {
  const pElement = document.createElement("img");
  pParent.appendChild(pElement);
  if (eClass) pElement.classList.add(eClass);
  if (eSrc) pElement.src = eSrc;
  if (eAlt) pElement.alt = eAlt;

  return pElement;
}

export function test() {
  const pContainer = addElement(document.body, "div", "container", "");
  addElement(pContainer, "h1", "", "Flower Shop");
  console.log("FlowerShop - h1");
  addImgElement(pContainer, "icon", "svg/ok.svg", "icon");
  addImgElement(pContainer, "", "img/flowers.jpg", "picture");
}



export function buildScopeString(
  scopeKeys: ScopeKey[], 
): string {
  return scopeKeys
    .map(key => `${APP_SCOPES[key]}`)
    .join(' ');
}
