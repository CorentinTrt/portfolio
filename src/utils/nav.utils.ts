export interface NavInterface {
  setAttributes: Function;
  showTarget: Function;
}

export default class Nav {
  document: Document;
  constructor(document: Document) {
    this.document = document;
  }

  setAttributes() {
    const { document } = this;

    const navContent = document.querySelector('#menu-content')?.children;
    if (!navContent) return;
    const navMenu = document.querySelector('#menu-item')?.children;
    if (!navMenu) return;

    let i = 0;

    // for (let e of Array.from(navContent)) {
    //   e.setAttribute('data-target', i);
    //   i++;
    // }

    for (let e of Array.from(navMenu)) {
      e.setAttribute('data-target', i.toString());
      i++;
    }
  }

  showTarget(target: number) {
    const { document } = this;

    const content = document.querySelector('#menu-content') as HTMLElement;
    const contentHeight = content?.offsetHeight;

    const topSpace = contentHeight * target * -1;

    const menuContentGroup = document.querySelector('#menu-content-group') as HTMLElement;
    menuContentGroup.style.top = `${topSpace}px`;
  }
}
