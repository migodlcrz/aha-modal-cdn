(function () {
  const seedId = () => {
    let id = "id" + Math.random().toString(16).slice(2);
    return id;
  };

  const modalId = `support-modal-${seedId()}`;
  const supportFormId = `support-form-${seedId()}`;
  const overlayHtml = `
    <div id="overlay" />
  `;
  const modalHtml = `
    <div id="${modalId}" class="modal">
        X
    </div>
    `;
  const wholeModal = `
    <div id='supportModal' style='right: -14rem'>
      <div id='contentWrapper'>
      <button id="modalDraw">
        <span> Support Modal </span>
        <span> </span>
      </button>
      <div id="modalContent">
        jkasdjakdsajkjkaskdjks
      <div>
      <div>

    </div>
  `;
  const floatingButton = document.createElement("button");

  document.body.insertAdjacentHTML("beforeend", wholeModal);
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById(modalId);
  // const overlay = document.getElementById("overlay");
  // overlay.addEventListener("click", closeOverlay);
  // const closeButton = modal.querySelector(".close");
  // const submitButton = modal.querySelector(`#${supportFormId} button`);
  const drawer = document.getElementById("supportModal");
  const drawerBTN = document.getElementById("modalDraw");

  drawerBTN.addEventListener("click", () => {
    let rVal = drawer.style.right;
    if (rVal === "-14rem") {
      drawer.style.right = "-1rem";
    } else {
      drawer.style.right = "-14rem";
    }
  });

  function openModal(buttonElem) {
    // modal.style.display = "block";
    // overlay.style.display = "block";
    buttonElem.style.width = "500px";
    buttonElem.style.height = "200px";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function closeOverlay() {
    // overlay.style.display = "none";
    floatingButton.style.width = "200px";
    floatingButton.style.height = "50px";
  }

  document.addEventListener("DOMContentLoaded", function () {
    floatingButton.innerText = "Support";
    floatingButton.id = "support-button";
    floatingButton.classList.add("floating-button");
    document.body.appendChild(floatingButton);
    floatingButton.addEventListener("click", () => {
      openModal(floatingButton);
    });
  });

  closeButton.addEventListener("click", closeModal);

  // Submit form
  // document
  //   .getElementById(supportFormId)
  //   .addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     // Here you can add logic to handle form submission (e.g., send data to server)
  //     alert("Form submitted!");
  //     closeModal();
  //   });
})();
