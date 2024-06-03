import { connLogo } from "../assets/images.js";

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
    <div id='supportModal'>
      <div id='contentWrapper'>
        <div id="modalContent" style="clip-path: circle(100%);">
          <div id="borderParent" class="dropMargin">
            <div id="drop">
              <span> Dropdown </span>
            </div>
          </div>
          <div id="overflowParent" class="customScroll">
            <div>
              <input type="file" id="uploadBTN" />
              <label for="uploadBTN">
                <span>Upload Screenshot</span>
              </label>
            <div>

            <div>
            yyy 
            </div>

          </div>
          <div id="btnArea">
          </div>
        </div>
        <button id="modalBTN">
          <img id='imgLogo' src=${connLogo} alt="Connectwise Logo" /> 
        </button>
      <div>
    </div>
  `;

  const screenShot = `
    <div id="uploadScreen">
      <span> Preview </span>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", wholeModal);
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modalBtn = document.getElementById("modalBTN");
  const modalContent = document.getElementById("modalContent");
  console.log(modalContent);

  //modalContent.insertAdjacentHTML("beforeend", screenShot);

  modalBtn.addEventListener("click", () => {
    console.log(modalContent.style.clipPath);
    const clip = modalContent.style.clipPath;
    if (clip === "circle(30px at 91.5% 94%)") {
      modalContent.style.clipPath = "circle(100%)";
      modalBtn.style.background = "transparent";
    } else {
      modalContent.style.clipPath = "circle(30px at 91.5% 94%)";
      modalBtn.style.background = "#ebebeb";
    }
  });

  document.addEventListener("DOMContentLoaded", function () {});
})();
