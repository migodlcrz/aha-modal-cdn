import { blkArr, connLogo, imgPlace, rArrow } from "../assets/images.js";

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
      
    </div>
  `;

  const modalContentElement = `
  <div id='contentWrapper'>
    <div id="modalContent" style="clip-path: circle(100%);">
      <div id="headerWrap">
        Submit a Ticket
      </div>
      <form id="formElem">
        <div id="ticketWrap">
          <div class="borderParent dropMargin">
            <div id="dropWrap">
              <div id="drop">
                <span class="headerInput"> Incident Type </span>
                <span> Dropdown Incidents </span>
              </div>
              <img src=${blkArr} alt="Down" id="rArr" class="rotateToDown" />
            </div>
          </div>
          <div id="overflowParent" class="customScroll">
            <div class="borderParent upImg">
              <input type="file" id="uploadBTN" />
              <label for="uploadBTN" id="upLbl">
                <image id="imgPlaceholder" src=${imgPlace} />
                <span>+ Upload Screenshot</span>
              </label>
            </div>

            <div class="borderParent">
              <div id="descArea">
                <span>Description</span>
                <textarea class="customScroll" rows="6" placeholder="Enter details here..."></textarea>
              </div>
            </div>

          </div>

        </div>

        <div id="botBtnWrap">
          <button class="botBtn" id="cancelBtn" type="button"> Cancel </button>
          <button class="botBtn" id="submitBtn2" type="submit"> 
          <span>Submit</span>
          <img  id='rArr' src=${rArrow} alt="Arrow"  /> 
          </button>
        <div>
      </form>
    </div>
  <div>
  `;

  //   <button id="submitBtn">
  //   <span id="submitArrWrap">
  //   <img  id='rArr' src=${rArrow} alt="Arrow"  />
  //   </span>
  // </button>

  //   <div id="btnArea">
  //   <button class="endBtn">
  //     Button 1
  //   </button>
  //   <button class="endBtn">
  //     Button 2
  //   </button>
  // </div>

  const modalBTN = `
  <button id="modalBTN">
    <img src=${connLogo} alt="Connectwise Logo" class="fitImg" /> 
  </button>
  `;

  const screenShot = `
    <image src="#" alt="Screenshot" class="fitImg" id="screenShot" />
  `;

  const dropOptsElem = `
    <div id="dropOpts">
      <span class="headerInput px-10">
        Select Incident Type
      </span>
      <div id="optWrap">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
        <button>Option 4</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", wholeModal);
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById("supportModal");

  modal.innerHTML = modalBTN;

  // tangal start
  // modal.style.height = "500px";
  // modal.style.width = "400px";
  // modal.style.borderRadius = "10px";

  // setTimeout(() => {
  //   modal.innerHTML = modalContentElement;
  // }, 100);
  // setTimeout(() => {
  //   const modalContent = document.getElementById("modalContent");
  //   modalContent.style.opacity = "1";

  //   const uploadFile = document.getElementById("uploadBTN");
  //   const uploadLabel = document.getElementById("upLbl");
  //   uploadFile.addEventListener("change", (input) => {
  //     const [file] = input.target.files;
  //     if (file) {
  //       const url = URL.createObjectURL(file);
  //       uploadLabel.innerHTML = screenShot;
  //       const ssIMG = document.getElementById("screenShot");
  //       ssIMG.src = url;
  //     }
  //   });

  //   const dropWrap = document.getElementById("dropWrap");

  //   dropWrap.addEventListener("click", () => {
  //     let dropOpts = document.getElementById("dropOpts");
  //     if (dropOpts) {
  //       dropOpts.style.top = "90%";
  //       dropOpts.style.opacity = "0";
  //       setTimeout(() => {
  //         dropOpts.remove();
  //       }, 400);
  //     } else {
  //       dropWrap.insertAdjacentHTML("beforeend", dropOptsElem);
  //       dropOpts = document.getElementById("dropOpts");
  //       setTimeout(() => {
  //         dropOpts.style.top = "120%";
  //         dropOpts.style.opacity = "1";
  //       }, 300);
  //     }
  //   });

  //   const cancelBtn = document.getElementById("cancelBtn");

  //   cancelBtn.addEventListener("click", () => {
  //     const modalContent = document.getElementById("modalContent");
  //     modalContent.style.opacity = "0";
  //     setTimeout(() => {
  //       modal.style.width = "65px";
  //       modal.style.height = "65px";
  //       modal.style.borderRadius = "100%";
  //     }, 350);
  //     setTimeout(() => {
  //       modal.innerHTML = modalBTN;
  //     }, 900);
  //   });
  // }, 500);
  // tangal end

  const modalBtn = document.getElementById("modalBTN");

  // modalContent.insertAdjacentHTML("beforeend", screenShot);

  const openModal = () => {
    modal.style.height = "500px";
    modal.style.width = "400px";
    modal.style.borderRadius = "10px";
    modalBtn.style.opacity = "0";
    setTimeout(() => {
      modal.innerHTML = modalContentElement;
    }, 100);

    // Upload Screenshot
    setTimeout(() => {
      const modalContent = document.getElementById("modalContent");
      modalContent.style.opacity = "1";

      const uploadFile = document.getElementById("uploadBTN");
      const uploadLabel = document.getElementById("upLbl");
      uploadFile.addEventListener("change", (input) => {
        const [file] = input.target.files;
        console.log(input);
        if (file) {
          const url = URL.createObjectURL(file);
          console.log(url);
          uploadLabel.innerHTML = screenShot;
          const ssIMG = document.getElementById("screenShot");
          ssIMG.src = url;
        }
      });

      // Dropdown functions
      const dropWrap = document.getElementById("dropWrap");
      dropWrap.addEventListener("click", () => {
        let dropOpts = document.getElementById("dropOpts");
        if (dropOpts) {
          // close them
          dropOpts.style.top = "90%";
          dropOpts.style.opacity = "0";
          setTimeout(() => {
            dropOpts.remove();
          }, 400);
        } else {
          // open the options
          dropWrap.insertAdjacentHTML("beforeend", dropOptsElem);
          dropOpts = document.getElementById("dropOpts");
          setTimeout(() => {
            dropOpts.style.top = "120%";
            dropOpts.style.opacity = "1";
          }, 200);
        }
      });
    }, 500);

    // For Cancel Button
    setTimeout(() => {
      const cancelBtn = document.getElementById("cancelBtn");
      console.log(cancelBtn);

      cancelBtn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent");
        modalContent.style.opacity = "0";
        setTimeout(() => {
          modal.style.width = "65px";
          modal.style.height = "65px";
          modal.style.borderRadius = "100%";
        }, 250);
        setTimeout(() => {
          // modal.innerHTML = modalBTN;
          // const modalBTN = document.getElementById("modalBTN");
          console.log(modalBTN);
          modal.innerHTML = modalBTN;
          const openBtn = document.getElementById("modalBTN");
          openBtn.addEventListener("click", openModal);
        }, 800);
      });
    }, 600);

    modal.innerHTML = modalContentElement;
  };

  modalBtn.addEventListener("click", openModal);

  document.addEventListener("DOMContentLoaded", function () {});
})();
