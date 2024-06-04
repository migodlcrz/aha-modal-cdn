import { blkArr, connLogo, imgPlace, rArrow } from "../assets/images.js";

(function () {
  const seedId = () => {
    let id = "id" + Math.random().toString(16).slice(2);
    return id;
  };

  const modalId = `support-modal-${seedId()}`;

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
                <span class="headerInput"> Submission Type :) </span>
                <span id="submissionType"> Accidental Submission/Other </span>
              </div>
              <img src=${blkArr} alt="Down" id="rArr" class="rotateToDown" />
            </div>
          </div>

          <div id="overflowParent" class="customScroll">
            <div class="borderParent">
              <div id="dropWrap">
                <div id="drop">
                  <span class="headerInput"> Submission Type :) </span>
                  <span id="submissionType"> Accidental Submission/Other </span>
                </div>
                <img src=${blkArr} alt="Down" id="rArr" class="rotateToDown" />
              </div>
            </div>
            
            <div class="borderParent">
              <div class="inpWrap">
                <span class="headerInput"> Submission Name </span>
                <input type="text" name="subName" id="subName" class="inputBox" placeholder="Type here..." autocomplete="off" />
              </div>
            </div>

            <div class="borderParent upImg">
              <input type="file" id="uploadBTN" />
              <label for="uploadBTN" id="upLbl">
                <image id="imgPlaceholder" src=${imgPlace} />
                <span>+ Upload Screenshot</span>
              </label>
            </div>

            <div class="borderParent">
              <div id="descArea">
                <span class="headerInput">Description</span>
                <textarea name="description" class="customScroll" rows="6" placeholder="Enter details here..."></textarea>
              </div>
            </div>

            <div class="borderParent">
              <div class="inpWrap">
                <span class="headerInput"> Current URL </span>
                <input type="text" name="currentURL" id="currentURL" class="inputBox" value=${window.location.href} readonly placeholder="Type here..." autocomplete="off" />
              </div>
            </div>
          </div>

        </div>

        <div id="botBtnWrap">
          <button class="botBtn" id="cancelBtn" type="button"> Cancel </button>
          <button class="botBtn" id="submitBtn" type="submit"> 
          <span>Submit</span>
          <img  id='rArr' src=${rArrow} alt="Arrow"  /> 
          </button>
        <div>
      </form>
    </div>
  <div>
  `;

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
        Select Submission Type
      </span>
      <div id="optWrap">
        <button type="button">Accidental Submission/Other</button>
        <button type="button">Change Request</button>
        <button type="button">Incident</button>
        <button type="button">Must Change</button>
        <button type="button">Service Request</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", wholeModal);
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById("supportModal");

  modal.innerHTML = modalBTN;

  const modalBtn = document.getElementById("modalBTN");

  // Function for opening the modal
  const openModal = () => {
    modal.style.height = "505px";
    modal.style.width = "400px";
    modal.style.borderRadius = "10px";
    modalBtn.style.opacity = "0";
    setTimeout(() => {
      modal.innerHTML = modalContentElement;
    }, 100);

    // Upload Screenshot & Dropdowns
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
          const options = dropWrap.getElementsByTagName("button");
          const subType = document.getElementById("submissionType");

          for (let btn of options) {
            btn.addEventListener("click", () => {
              subType.textContent = btn.textContent;
            });
          }
        }
      });
    }, 300);

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
        }, 700);
      });
    }, 400);

    // Submitting Form
    setTimeout(() => {
      const form = document.getElementById("formElem");
      console.log(form);
      form.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const data = new FormData(ev.target);
        const subType = document.getElementById("submissionType");

        const [boardType, subName, descr, currUrl] = [...data.entries()];
        // console.log(boardType, subName, descr, currUrl);
        console.log("pumasok");
        const createRes = await fetch(
          "https://cdn-connectwise.srilan-catalinio.workers.dev/createTicket",
          {
            method: "POST",
            headers: {
              Authorization:
                "Basic YW5jaG9yc2l4X2NzMStMVTh4Z3dmRkxKaEZkUFVEOmdaTlN0N1M5Vm04MW9mRjE=",
              clientId: "dda341d3-f8bc-4fc1-9b99-e6721e35bae7",
            },
            body: JSON.stringify({
              summary: subName[1].trim(),
              board: {
                name: boardType[1].trim(),
              },
              company: {
                id: 19299,
              },
              type: {
                name: subType.textContent.trim(),
              },
            }),
          }
        );
        const id = await createRes.json();
        console.log(id);

        const putRes = await fetch(
          "https://cdn-connectwise.srilan-catalinio.workers.dev/putDetails",
          {
            method: "POST",
            headers: {
              Authorization:
                "Basic YW5jaG9yc2l4X2NzMStMVTh4Z3dmRkxKaEZkUFVEOmdaTlN0N1M5Vm04MW9mRjE=",
              clientId: "dda341d3-f8bc-4fc1-9b99-e6721e35bae7",
            },
            body: JSON.stringify({
              id: id,
              text: `Current URL: ${currUrl[1]} \nDescription:${descr[1]}`,
              detailDescriptionFlag: true,
              member: { id: 157 },
            }),
          }
        );
        const jason = await putRes.json();
        console.log(jason);
      });
    }, 400);

    modal.innerHTML = modalContentElement;
  };

  modalBtn.addEventListener("click", openModal);

  document.addEventListener("DOMContentLoaded", function () {});
})();
