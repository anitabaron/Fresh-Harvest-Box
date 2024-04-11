(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", fruits__btn);
    refs.closeModalBtn.addEventListener("click", fruits__btn);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
