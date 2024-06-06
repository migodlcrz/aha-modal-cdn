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

  const wholeModal = `
    <div id='supportModal' 
    style="position: fixed;right: 4em;z-index: 1000;bottom: 3em;width: 65px;height: 65px;box-shadow: 0 0 13px -6px #000;border-radius: 100%;transition: width 0.5s ease, height 0.5s ease, border-radius 0.5s ease;background-color: #fff;">
      
    </div>
  `;

  const modalContentElement = `
  <div id='contentWrapper' style="width: 100%;height: 100%;position: relative;">
    <div id="modalContent" style="width: 100%;height: 100%;display: flex;flex-direction: column;background-color: #ffffff;font-size: 20px;transition: all 0.5s ease;border-radius: 20px;gap: 10px;opacity: 0;position:relative">
      <div id="headerWrap" style="background-color: #184997;border-radius: 10px 10px 0 0;color: #fff;padding: 13px 15px;font-family: Georgia;font-size: 18px;">
        Submit a Ticket
      </div>
      <form id="formElem" style="display: flex;flex-direction: column;flex-grow: 1;gap: 10px;">
        <div id="ticketWrap" style="padding: 5px 20px 5px 20px;display: flex;flex-direction: column;gap: 10px;">
          <div class="borderParent dropMargin" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
            <div id="dropWrap" style="display: flex;align-items: center; justify-content: space-between;padding: 8px 15px;position: relative;">
              <div id="drop" style="background-color: #ffffff;color: black;border-radius: 5px;font-size: 14px;display: flex;flex-direction: column;gap: 4px;">
                <span class="headerInput helv" style='font-size: 12px;  color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;'>Submission Type</span>
                <span id="submissionType" class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;'>Accidental Submission/Other</span>
              </div>
              <img src=${blkArr} alt="Down" id="rArr" class="rotateToDown" style="rotate: 90deg;width: 12px;height: 12px;" />
            </div>
          </div>

          <div id="overflowParent" class="customScroll" style="width: 100%;flex-grow: 1;display: flex;padding-right: 8px;flex-direction: column;overflow-y: scroll;gap: 10px;height: 315px;">
            <div id="boardWrap" style="display: flex;width: 100%;gap: 10px;">
              <div class="borderParent radioOpt" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;flex-grow: 1;">
                <input type="radio" name="boardType" id="sbddm" value="SB DDM" checked style="opacity: 0;position: absolute;" />
                <label for="sbddm" style='display: flex;align-items: center;justify-content: center;width: 100%;'>
                  <div class="innerBoard helv" style='padding: 10px 0;text-align: center;width: 100%;background-color: #eaf2ff;border-radius: 5px;color: #7e7e7e;font-size: 14px;transition: all 0.3s ease-in-out; font-family: Helvetica, "Times New Roman", Times, serif;'>
                    SB DDM
                  </div>
                </label>
              </div>
              <div class="borderParent radioOpt" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;flex-grow: 1;">
                <input type="radio" name="boardType" id="otherOpt" value="Other" style="opacity: 0;position: absolute;" />
                <label for="otherOpt" style="display: flex;align-items: center;justify-content: center;width: 100%;"> 
                  <div class="innerBoard helv" style='padding: 10px 0;text-align: center;width: 100%;background-color: #eaf2ff;border-radius: 5px;color: #7e7e7e;font-size: 14px;transition: all 0.3s ease-in-out; font-family: Helvetica, "Times New Roman", Times, serif;'>
                      OTHER
                  </div>
                </label>
              </div>
            </div>
            
            <div class="borderParent" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
              <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;">
                <span class="headerInput helv" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;'> Submission Name </span>
                <input type="text" name="subName" id="subName" class="inputBox helv" style='font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;font-size: 15px;padding: 0px;' placeholder="Type here..." autocomplete="off" />
              </div>
            </div>

            <div class="borderParent upImg" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;border: 3px dashed #a1c1f3;">
              <input type="file" id="uploadBTN" name="uploadBTN" style="position: absolute;width: 0.1px;height: 0.1px;opacity: 0;z-index: 0;overflow: hidden;" />
              <label for="uploadBTN" id="upLbl" style="height: 150px;background: #eaf2ff;border-radius: 5px;display: flex;align-items: center;justify-content: center;cursor: pointer;color: #92abd3;display: flex;flex-direction: column;gap: 15px;font-size: 14px;">
                <image id="imgPlaceholder" src=${imgPlace} style="width: 40px;height: 40px;" />
                <span class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;'>+ Upload Screenshot</span>
              </label>
            </div>

            <div class="doubleDiv" style="display: flex;justify-content: space-between;align-items: center;">
              <div class="borderParent" style="width:47%;border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
                <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;">
                  <span class="headerInput helv" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;'> IP Address </span>
                  <input type="text" name="IPAdd" id="IPAdd" class="inputBox helv" style='font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;color: #878787;font-size: 14.5px;padding:0;' value=${ip} style="padding:0px" readonly />
                </div>
              </div>

              <div class="borderParent" style="width:46%;border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
                <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;">
                  <span class="headerInput helv" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;'> Location </span>
                  <input type="text" name="Locate" id="Locate" class="inputBox helv" style='font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;color: #878787;  font-size: 14.5px; padding:0px' value=${locRes.geoplugin_countryName} readonly />
                </div>
              </div>
            </div>

            <div class="borderParent" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
              <div id="descArea" style="display: flex;flex-direction: column;gap: 8px;background-color: #fff;padding: 10px;">
                <span class="headerInput helv" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;'>Description</span>
                <textarea name="descInp" class="customScroll helv" style='outline: none;border: none;resize: none;padding-right: 5px;background: transparent;font-size: 13px;font-family: Helvetica, "Times New Roman", Times, serif;padding: 0px;' rows="6" placeholder="Enter details here..." id="descInp"></textarea>
              </div>
            </div>

            <div class="borderParent" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
              <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;">
                <span class='headerInput helv' style="font-size: 12px;color: #979797;font-family: Helvetica, 'Times New Roman', Times, serif;"> Current URL </span>
                <input type="text" name="currentURL" id="currentURL" class="inputBox helv" style='font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;color: #878787;font-size: 14.5px;padding: 0px;outline: none;' value=${window.location.href} readonly />
              </div>
            </div>
          </div>

        </div>

        <div id="botBtnWrap" style="display: flex;width: 100%;justify-content: space-between;height: 100%;">
          <button class="botBtn" id="cancelBtn" type="button" style="width: 50%;border: none;background-color: #5d89d0;color: white;cursor: pointer;font-size: 13px; border-radius: 0 0 0 10px;padding: 10px 0 10px 30px;display: flex;align-items: center;justify-content: start;"> Cancel </button>
          <button class="botBtn" id="submitBtn" type="submit" style="width: 50%;border: none;background-color: #5d89d0;color: white;cursor: pointer;font-size: 13px; border-radius: 0 0 10px 0;padding: 10px 30px 10px 0;display: flex;align-items: center;justify-content: end;gap: 10px;"> 
          <span>Submit</span>
          <img id='rArr' src=${rArrow} alt="Arrow" style="width: 12px;height: 12px;"  /> 
          </button>
        <div>
      </form>
    </div>
  <div>
  `;

  const modalBTN = `
  <button id="modalBTN" style="width: 65px;height: 65px;padding: 10px;border-radius: 100%;cursor: pointer;background-color: #ffffff;border: none;display: flex;opacity: 1;">
    <img src=${connLogo} alt="Connectwise Logo" class="fitImg" style="height: 100%;width: auto;" /> 
  </button>
  `;
  const screenShot = `
    <image src="#" alt="Screenshot" class="fitImg" id="screenShot" style="height: 100%;width: auto;" />
  `;
  const dropOptsElem = `
    <div id="dropOpts" style="position: absolute;top: 90%;opacity: 0;width: 100%;background-color: #fff;left: 0;padding: 10px 0;border: 1px solid #d4d4d4;border-radius: 5px;transition: all 0.3s ease-in-out; z-index:1199;">
      <span class="headerInput px-10 helv" style='font-size: 12px;color: #979797;padding: 0 10px;font-family: Helvetica, "Times New Roman", Times, serif;'>
        Select Submission Type
      </span>
      <div id="optWrap" class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;display: flex;flex-direction: column;margin-top: 5px;'>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;5px;">Accidental Submission/Other</button>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;5px;">Change Request</button>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;5px;">Incident</button>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;5px;">Must Change</button>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;5px;">Service Request</button>
      </div>
    </div>
  `;
  const succToastMSG = `
  <div class="cdnToastMSG" id="succToasMSG" style="z-index: 900;position: absolute;bottom: 95%;left:0;right:0;padding: 10px 20px;border-radius: 10px;color: #fff;opacity: 0;transition: bottom 0.3s ease-in, opacity 0.3s ease-in; background: #20eb00;">
    <div id="toastMSGWrap" style="display: flex;width: 100%;height: 100%;gap: 15px;align-items: center;">
      <img src=${check} alt="check" class="toastMSGIcon" style="height: 30px;width: 30px;" />
      <div id="toastTexts945" style="display: flex;flex-direction: column;gap: 4px;">
        <span class="toastHeader34 frank" style="font-size: 14px;font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;">SUCCESS</span>
        <span class="toastCont495 helv" style='font-size: 16px;font-family: Helvetica, "Times New Roman", Times, serif;'>Ticket was successfully submitted.</span>
      </div>
    </div>
  </div>
  `;
  const errToastMSG = `
  <div class="cdnToastMSG" id="errToasMSG" style="z-index: 900;position: absolute;bottom: 95%;left:0;right:0;padding: 10px 20px;border-radius: 10px;color: #fff;opacity: 0;transition: bottom 0.3s ease-in, opacity 0.3s ease-in;background-color: #f10000;">
    <div id="toastMSGWrap" style="display: flex;width: 100%;height: 100%;gap: 15px;align-items: center;">
      <img src=${close} alt="close" class="toastMSGIcon" style="height: 30px;width: 30px;" />
      <div id="toastTexts945" style="display: flex;flex-direction: column;gap: 4px;">
        <span class="toastHeader34 frank" style="font-size: 14px;font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;>ERROR</span>
        <span class="toastCont495 helv" style='font-size: 16px;font-family: Helvetica, "Times New Roman", Times, serif;'>Please Fill Out Incomplete Fields</span>
      </div>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", wholeModal);

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
