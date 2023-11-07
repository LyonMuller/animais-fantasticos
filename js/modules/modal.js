export default class Modal {
  constructor(abrir, fechar, container) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.container = document.querySelector(container);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.container.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.container) this.toggleModal();
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.abrir.addEventListener("click", this.eventToggleModal);
    this.fechar.addEventListener("click", this.eventToggleModal);
    this.container.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.abrir && this.fechar && this.container) {
      this.addModalEvents();
    }
    return this;
  }
}
