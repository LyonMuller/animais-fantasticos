export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    // bind do objeto da classe aos callbacks
    this.onMouseHover = this.onMouseHover.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // Move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseHover({ currentTarget }) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // adiciona os eventos de mousehover a cada tooltip
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseHover);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
