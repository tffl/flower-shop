import { APP_SCOPES, ScopeKey } from "../utils/constants";

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

// export function addImgElement(
//   pParent: HTMLElement,
//   eClass: string,
//   eSrc: string,
//   eAlt: string,
// ): HTMLImageElement {
//   const pElement = document.createElement("img");
//   pParent.appendChild(pElement);
//   if (eClass) pElement.classList.add(eClass);
//   if (eSrc) pElement.src = eSrc;
//   if (eAlt) pElement.alt = eAlt;

//   return pElement;
// }

export function buildScopeString(scopeKeys: ScopeKey[]): string {
  return scopeKeys.map((key) => `${APP_SCOPES[key]}`).join(" ");
}
