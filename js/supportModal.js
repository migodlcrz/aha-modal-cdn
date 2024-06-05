import {
  blkArr,
  check,
  close,
  connLogo,
  imgPlace,
  rArrow,
} from "../assets/images.js";

(async function () {
  const seedId = () => {
    let id = "id" + Math.random().toString(16).slice(2);
    return id;
  };

  // Get User IP
  const resss = await fetch("https://api.ipify.org?format=json").then(
    async (resp) => await resp.json()
  );
  const ip = resss.ip;
  // Get User Location
  const locRes = await fetch(`http://www.geoplugin.net/json.gp?ip=${ip}`).then(
    async (res) => await res.json()
  );
  console.log(locRes);

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
                <span class="headerInput helv">Submission Type</span>
                <span id="submissionType" class="helv">Accidental Submission/Other</span>
              </div>
              <img src=${blkArr} alt="Down" id="rArr" class="rotateToDown" />
            </div>
          </div>

          <div id="overflowParent" class="customScroll">
            <div id="boardWrap">
              <div class="borderParent radioOpt">
                <input type="radio" name="boardType" id="sbddm" value="SB DDM" checked />
                <label for="sbddm">
                  <div class="innerBoard helv">
                    SB DDM
                  </div>
                </label>
              </div>
              <div class="borderParent radioOpt">
                <input type="radio" name="boardType" id="otherOpt" value="Other" />
                <label for="otherOpt"> 
                  <div class="innerBoard helv">
                      OTHER
                  </div>
                </label>
              </div>
            </div>
            
            <div class="borderParent">
              <div class="inpWrap">
                <span class="headerInput helv"> Submission Name </span>
                <input type="text" name="subName" id="subName" class="inputBox helv" placeholder="Type here..." autocomplete="off" />
              </div>
            </div>

            <div class="borderParent upImg">
              <input type="file" id="uploadBTN" name="uploadBTN" />
              <label for="uploadBTN" id="upLbl">
                <image id="imgPlaceholder" src=${imgPlace} />
                <span class="helv">+ Upload Screenshot</span>
              </label>
            </div>

            <div class="doubleDiv">
              <div class="borderParent" style="width:48%">
                <div class="inpWrap">
                  <span class="headerInput helv"> IP Address </span>
                  <input type="text" name="IPAdd" id="IPAdd" class="inputBox helv" value=${ip} readonly />
                </div>
              </div>

              <div class="borderParent" style="width:48%">
                <div class="inpWrap">
                  <span class="headerInput helv"> Location </span>
                  <input type="text" name="Locate" id="Locate" class="inputBox helv" value=${locRes.geoplugin_countryName} readonly />
                </div>
              </div>
            </div>

            <div class="borderParent">
              <div id="descArea">
                <span class="headerInput helv">Description</span>
                <textarea name="descInp" class="customScroll helv" rows="6" placeholder="Enter details here..." id="descInp"></textarea>
              </div>
            </div>

            <div class="borderParent">
              <div class="inpWrap">
                <span class="headerInput helv"> Current URL </span>
                <input type="text" name="currentURL" id="currentURL" class="inputBox helv" value=${window.location.href} readonly />
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
      <span class="headerInput px-10 helv">
        Select Submission Type
      </span>
      <div id="optWrap" class="helv">
        <button type="button">Accidental Submission/Other</button>
        <button type="button">Change Request</button>
        <button type="button">Incident</button>
        <button type="button">Must Change</button>
        <button type="button">Service Request</button>
      </div>
    </div>
  `;
  const succToastMSG = `
  <div class="cdnToastMSG" id="succToasMSG">
    <div id="toastMSGWrap">
      <img src=${check} alt="check" class="toastMSGIcon" />
      <div id="toastTexts945">
        <span class="toastHeader34 frank">SUCCESS</span>
        <span class="toastCont495 helv">Ticket was successfully submitted.</span>
      </div>
    </div>
  </div>
  `;
  const errToastMSG = `
  <div class="cdnToastMSG" id="errToasMSG">
    <div id="toastMSGWrap">
      <img src=${close} alt="close" class="toastMSGIcon" />
      <div id="toastTexts945">
        <span class="toastHeader34 frank">ERROR</span>
        <span class="toastCont495 helv">Please Fill Out Incomplete Fields</span>
      </div>
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
        }, 350);
        setTimeout(() => {
          // modal.innerHTML = modalBTN;
          // const modalBTN = document.getElementById("modalBTN");
          console.log(modalBTN);
          modal.innerHTML = modalBTN;
          const openBtn = document.getElementById("modalBTN");
          openBtn.addEventListener("click", openModal);
        }, 800);
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

        const [boardType, subName, ssImg, ipAdd, locate, descr, currUrl] = [
          ...data.entries(),
        ];
        console.log([...data.entries()]);
        console.log(boardType, subName, descr, currUrl, subType.textContent);

        const [nameBool, descBool] = [subName[1] === "", descr[1] === ""];

        // IF incomplete fields
        if (nameBool || descBool) {
          console.log("ERROR");
          const modalContent = document.getElementById("modalContent");
          modalContent.insertAdjacentHTML("beforeend", errToastMSG);

          setTimeout(() => {
            const toastMSG = document.getElementById("errToasMSG");
            toastMSG.style.bottom = "103%";
            toastMSG.style.opacity = "1";

            setTimeout(() => {
              toastMSG.style.bottom = "95%";
              toastMSG.style.opacity = "0";
            }, 3500);
            setTimeout(() => {
              toastMSG.remove();
            }, 4000);
          }, 200);
          return;
        }

        // Success Toast Message
        const modalContent = document.getElementById("modalContent");
        modalContent.insertAdjacentHTML("beforeend", succToastMSG);

        setTimeout(() => {
          const toastMSG = document.getElementById("succToasMSG");
          toastMSG.style.bottom = "103%";
          toastMSG.style.opacity = "1";

          setTimeout(() => {
            toastMSG.style.bottom = "95%";
            toastMSG.style.opacity = "0";
          }, 3500);
          setTimeout(() => {
            toastMSG.remove();
          }, 4000);
        }, 200);

        console.log("pumasok");
        // const createRes = await fetch(
        //   "https://cdn-connectwise.srilan-catalinio.workers.dev/createTicket",
        //   {
        //     method: "POST",
        //     headers: {
        //       Authorization:
        //         "Basic YW5jaG9yc2l4X2NzMStMVTh4Z3dmRkxKaEZkUFVEOmdaTlN0N1M5Vm04MW9mRjE=",
        //       clientId: "dda341d3-f8bc-4fc1-9b99-e6721e35bae7",
        //     },
        //     body: JSON.stringify({
        //       summary: subName[1].trim(),
        //       board: {
        //         name: boardType[1].trim(),
        //       },
        //       company: {
        //         id: 19299,
        //       },
        //       type: {
        //         name: subType.textContent.trim(),
        //       },
        //     }),
        //   }
        // );
        // const id = await createRes.json();
        // console.log(id);

        // const putRes = await fetch(
        //   "https://cdn-connectwise.srilan-catalinio.workers.dev/putDetails",
        //   {
        //     method: "POST",
        //     headers: {
        //       Authorization:
        //         "Basic YW5jaG9yc2l4X2NzMStMVTh4Z3dmRkxKaEZkUFVEOmdaTlN0N1M5Vm04MW9mRjE=",
        //       clientId: "dda341d3-f8bc-4fc1-9b99-e6721e35bae7",
        //     },
        //     body: JSON.stringify({
        //       id: id,
        //       text: `Current URL: ${currUrl[1]} \nDescription:${descr[1]}`,
        //       detailDescriptionFlag: true,
        //       member: { id: 157 },
        //     }),
        //   }
        // );
        // const jason = await putRes.json();
        // console.log(jason);
      });
    }, 400);

    modal.innerHTML = modalContentElement;
  };

  modalBtn.addEventListener("click", openModal);

  document.addEventListener("DOMContentLoaded", function () {});
})();
