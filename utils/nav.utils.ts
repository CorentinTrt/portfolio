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

    const _navContent = document.querySelectorAll('.nav-content');
    const _navMenu = document.querySelectorAll('.nav-menu');
    let i = 0;
    let x = 0;

    //   @ts-ignore
    for (let e of _navContent) {
      e.setAttribute('data-target', i);
      i++;
    }

    //   @ts-ignore
    for (let e of _navMenu) {
      e.setAttribute('data-target', x);
      x++;
    }
  }

  // setMouseOver() {
  //   const _navMenuLabels = document.querySelectorAll('.nav-menu-label');

  //   // @ts-ignore
  //   for (let e of _navMenuLabels) {
  //     e.addEnventListener('onmouseover', () => {

  //     })
  //   }
  // }

  showTarget(target: number) {
    const { document } = this;

    // @ts-ignore
    const _contentHeight = document.querySelector('.content').offsetHeight;

    const topSpace = _contentHeight * target * -1;

    // @ts-ignore
    document.querySelector('.content').style.top = `${topSpace}px`;
  }
}
