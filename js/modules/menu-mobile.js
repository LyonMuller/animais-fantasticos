import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.activeClass = "active";
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    console.log(this);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuMobileEvents();
    return this;
  }
}
