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

  const modalId = `support-modal-${seedId()}`;

  const wholeModal = `
    <div id='supportModal' 
    style="position: fixed;right: 4em;z-index: 1000;bottom: 3em;width: 65px;height: 65px;box-shadow: 0 0 13px -6px #000;border-radius: 100%;transition: width 0.5s ease, height 0.5s ease, border-radius 0.5s ease;background-color: #fff;">
      
    </div>
  `;

  const modalContentElement = `
  <div id='contentWrapper' style="width: 100%;height: 100%;position: relative;">
    <div id="modalContent" style="width: 100%;height: 100%;display: flex;flex-direction: column;background-color: #ffffff;font-size: 20px;transition: all 0.5s ease;border-radius: 20px;gap: 10px;opacity: 0;position:relative">
      <div id="headerWrap" style="background-color: #265eb9;border-radius: 10px 10px 0 0;color: #fff;padding: 13px 15px;font-family: Georgia;font-size: 18px;">
        Submit a Ticket
      </div>
      <form id="formElem" style="display: flex;flex-direction: column;flex-grow: 1;gap: 10px;margin:0px;padding:0px;">
        <div id="ticketWrap" style="padding: 5px 20px 5px 20px;display: flex;flex-direction: column;gap: 10px;">
          <div class="borderParent dropMargin" id="nameBorder" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
            <div id="dropWrap" style="display: flex;align-items: center; justify-content: space-between;padding: 8px 15px 8px 10px;position: relative;">
              <div id="drop" style="background-color: #ffffff;color: black;border-radius: 5px;font-size: 14px;display: flex;flex-direction: column;gap: 4px;">
                <span class="headerInput helv" id="tSubNameHead" style='font-size: 12px;  color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;'>Submission Type</span>
                <span id="submissionType" class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;'>Accidental Submission/Other</span>
              </div>
              <img src=${blkArr} alt="Down" id="rArr" class="rotateToDown" style="rotate: 90deg;width: 12px;height: 12px;" />
            </div>
          </div>

          <div id="overflowParent" class="customScroll" style="width: 100%;flex-grow: 1;display: flex;padding-right: 8px;flex-direction: column;overflow-y: scroll;gap: 10px;height: 315px;margin:0px;padding-bottom: 5px;">


            
            <div class="borderParent" id="tsubmissionName" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;">
              <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;margin:0px;">
                <span class="headerInput helv" id="tSubmissionNameHeader" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;margin:0px;padding:0px'> Submission Name </span>
                <input type="text" name="subName" id="subName" class="inputBox helv" style='font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;font-size: 15px;padding: 0px;margin:0px;' placeholder="Type here..." autocomplete="off" />
              </div>
            </div>

            <div class="borderParent upImg" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: pointer;border: 3px dashed #a1c1f3;margin:0px;">
              <input type="file" accept="image/png, image/jpeg" id="uploadBTN" name="uploadBTN" style="position: absolute;width: 0.1px;height: 0.1px;opacity: 0;z-index: 0;overflow: hidden;" />
                <label for="uploadBTN" id="upLbl" style="height: 150px;background: #eaf2ff;border-radius: 5px;display: flex;align-items: center;justify-content: center;cursor: pointer;color: #92abd3;display: flex;flex-direction: column;gap: 15px;font-size: 14px;margin:0px;">
                  <image id="imgPlaceholder" src=${imgPlace} style="width: 40px;height: 40px;" />
                  <span class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;'>+ Upload Screenshot</span>
                </label>
              </div>

              <div class="borderParent dropMargin" id="boardBorder" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: default;">
                <div id="boardWrap" style="display: flex;align-items: center; justify-content: space-between;padding: 8px 10px;position: relative;">
                  <div id="drop" style="background-color: #ffffff;color: black;border-radius: 5px;font-size: 14px;display: flex;flex-direction: column;gap: 4px;">
                    <span class="headerInput helv" id="tBoardHead" style='font-size: 12px;  color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;'>Board Type</span>
                    <span id="boardType" class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;'>SB Milo Trajector Medical</span>
                  </div>
                  <img src=${blkArr} alt="Down" id="rArr" class="rotateToDown" style="rotate: 90deg;width: 12px;height: 12px;" />
                </div>
            </div>

            <div class="borderParent" id="tDescTicField" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: default;margin:0px;">
              <div id="descArea" style="display: flex;flex-direction: column;gap: 8px;background-color: #fff;padding: 10px;margin:0px;">
                <span class="headerInput helv" id="t_descHeader" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;margin:0px;padding:0px'>Description</span>
                <textarea name="descInp" class="customScroll helv" id="t_descInp" style='outline: none;border: none;resize: none;padding-right: 5px;background: transparent;font-size: 14px;font-family: Helvetica, "Times New Roman", Times, serif;padding: 0px;padding-right:13px;margin:0px;' rows="6" placeholder="Enter details here..." value="" id="descInp"></textarea>
              </div>
            </div>

            <div class="doubleDiv" style="display: flex;gap:10px;justify-content: space-between;align-items: center;margin:0px;padding:0px">
              <div class="borderParent" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: default;margin:0px;">
                <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;margin:0px;">
                  <span class="headerInput helv" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;padding:0px;margin:0px;'> IP Address </span>
                  <input type="text" name="IPAdd" id="IPAdd" class="inputBox helv" style='width:100%;font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;cursor:not-allowed;color: #777777;font-size: 14.5px;padding:0px;margin:0px;' value=${ip} style="padding:0px" readonly />
                </div>
              </div>

              <div class="borderParent" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: default;margin:0px;">
                <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;margin:0px;">
                  <span class="headerInput helv" style='font-size: 12px;color: #979797;font-family: Helvetica, "Times New Roman", Times, serif;margin:0px;padding:0px'> Location </span>
                  <input type="text" name="Locate" id="Locate" class="inputBox helv" style='width:100%;font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;cursor:not-allowed;color: #777777;  font-size: 14.5px; padding:0px;margin:0px;' value=${
                    locRes.geoplugin_countryName
                  } readonly />
                </div>
              </div>
            </div>

            <div class="borderParent" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: delault;margin:0px;">
              <div class="inpWrap" style="display: flex;flex-direction: column;padding: 8px 10px;gap: 5px;margin:0px;">
                <span class='headerInput helv' style="font-size: 12px;color: #979797;font-family: Helvetica, 'Times New Roman', Times, serif;padding:0px;margin:0px;"> Current URL </span>
                <input type="text" name="currentURL" id="currentURL" class="inputBox helv" style='font-family: Helvetica, "Times New Roman", Times, serif;border: none;outline: none;cursor:not-allowed;color: #777777;font-size: 14.5px;padding: 0px;outline: none;margin:0px;' value=${
                  window.location.href
                } readonly />
              </div>
            </div>

            <div class="borderParent" style="border: 1px solid #bebebe;padding: 3px;font-size: 16px;border-radius: 5px;cursor: delault;margin:0px;">
              <div class="inpWrap" style="display: flex;flex-direction: row;padding: 8px 10px;align-items:center;gap: 10px;margin:0px;">
                <span class='headerInput helv' style="font-size: 12px;color: #979797;font-family: Helvetica, 'Times New Roman', Times, serif;padding:0px;margin:0px;cursor:default;"> Creator </span>
                <span id="currentUser" style="font-size: 13px;cursor:not-allowed;color: #777777;font-family: Helvetica, 'Times New Roman', Times, serif;padding:0px;margin:0px;">${
                  displayName ? displayName : "No User"
                }</span>
              </div>
            </div>
            
          </div>

        </div>

        <div id="botBtnWrap" style="display: flex;width: 100%;justify-content: space-between;height: 100%;">
          <button class="botBtn" id="cancelBtn" type="button" style='width: 50%;border: none;background-color: #265eb9;color: white;cursor: pointer;font-size: 13px; border-radius: 0 0 0 10px;padding: 10px 0 10px 30px;display: flex;align-items: center;justify-content: start;font-family: Helvetica, "Times New Roman", Times, serif;margin:0px;'> Cancel </button>
          <button class="botBtn" id="submitBtn" type="submit" style="width: 50%;border: none;background-color: #265eb9;color: white;cursor: pointer;font-size: 13px; border-radius: 0 0 10px 0;padding: 10px 30px 10px 0;display: flex;align-items: center;justify-content: end;gap: 10px;"> 
          <span style='font-family: Helvetica, "Times New Roman", Times, serif;padding:0px;margin:0px;'>Submit</span>
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
  const retSSElem = (ssURI) =>
    `<image src=${ssURI} alt="Screenshot" class="fitImg" id="screenShot" style="height: 100%;width: auto;" />`;
  const ssPlaceholder = `
    <image id="imgPlaceholder" src=${imgPlace} style="width: 40px;height: 40px;" />
    <span class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;'>+ Upload Screenshot</span>
  `;
  const dropOptsElem = `
    <div id="dropOpts" style="position: absolute;top: 90%;opacity: 0;width: 100%;background-color: #fff;left: 0;padding: 10px 0;border: 1px solid #488eff;border-radius: 5px;transition: all 0.3s ease-in-out; z-index:1199;margin:0px;box-shadow:0 2px 13px -5px #181818;">
      <span class="headerInput px-10 helv" style='font-size: 12px;color: #979797;padding: 0 10px;font-family: Helvetica, "Times New Roman", Times, serif;margin:0px;'>
        Select Submission Type
      </span>
      <div id="optWrap" class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;display: flex;flex-direction: column;margin-top: 5px;'>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">Accidental Submission/Other</button>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">Change Request</button>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">Incident</button>
        <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">Service Request</button>
      </div>
    </div>
  `;
  const boardDropOpts = `
  <div id="boardOpts" style="position: absolute;top: 90%;opacity: 0;width: 100%;background-color: #fff;left: 0;padding: 10px 0;border: 1px solid #488eff;border-radius: 5px;transition: all 0.3s ease-in-out; z-index:1198;margin:0px;box-shadow:0 2px 13px -5px #181818;">
    <span class="headerInput px-10 helv" style='font-size: 12px;color: #979797;padding: 0 10px;font-family: Helvetica, "Times New Roman", Times, serif;margin:0px;'>
      Select Board Type
    </span>
    <div id="optWrap" class="helv" style='font-family: Helvetica, "Times New Roman", Times, serif;display: flex;flex-direction: column;margin-top: 5px;'>
      <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">SB Milo Trajector Medical</button>
      <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">SB Milo Outreach Legal</button>
      <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">SB Milo Veteran Help</button>
      <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">SB Client Profile</button>
      <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">SB DDM</button>
      <button type="button" style="border: transparent;background-color: transparent;text-align: start;transition: all 0.3s ease-in-out;padding: 5px 15px;font-size: 14px;border-left: 2px solid transparent;cursor:pointer">SB AI Draft Creator</button>
    </div>
  </div>
`;
  const succToastMSG = `
  <div class="cdnToastMSG" id="succToasMSG" style="z-index: 900;position: absolute;bottom: 95%;left:0;right:0;padding: 10px 20px;border-radius: 10px;color: #fff;opacity: 0;transition: bottom 0.3s ease-in, opacity 0.3s ease-in; background: #4ae232;">
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
  <div class="cdnToastMSG" id="errToasMSG" style="z-index: 900;position: absolute;bottom: 95%;left:0;right:0;padding: 10px 20px;border-radius: 10px;color: #fff;opacity: 0;transition: bottom 0.3s ease-in, opacity 0.3s ease-in;background-color: #ff5454;">
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
  const openModal = async () => {
    console.log("DISPLAY NAME: ", displayName);
    console.log("MILO SITE: ", miloSite);
    // Screenshot
    let ss64 = "";
    const stream = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
    });
    const vid = document.createElement("video");
    vid.addEventListener("loadedmetadata", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.canvas.width = vid.videoWidth;
      ctx.canvas.height = vid.videoHeight;
      ctx.drawImage(vid, 0, 0, vid.videoWidth, vid.videoHeight);
      // Stop Video once 1 frame of screenshot is taken
      stream.getVideoTracks()[0].stop();
      // Put to Sceenshot file
      ss64 = canvas.toDataURL("image/png");
      // let a = document.createElement("a");
      // a.download = "screen.png";
      // a.href = canvas.toDataURL("image/png");
      // console.log(canvas.toDataURL("image/png"));
    });
    vid.srcObject = stream;
    vid.play();

    // Opening of Ticket Creation
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
      uploadLabel.innerHTML = retSSElem(ss64);

      uploadFile.addEventListener("change", (input) => {
        const [file] = input.target.files;
        if (file) {
          const url = URL.createObjectURL(file);
          uploadLabel.innerHTML = retSSElem(url);
        }
      });

      // Dropdown functions
      const dropWrap = document.getElementById("dropWrap");
      const boardWrap = document.getElementById("boardWrap");
      const divBorder = document.getElementById("nameBorder");
      const bordBorder = document.getElementById("boardBorder");
      const nameHead = document.getElementById("tSubNameHead");
      const bordHead = document.getElementById("tBoardHead");
      const subTypeVal = document.getElementById("submissionType");
      const boardTypeVal = document.getElementById("boardType");
      // Submission Type Dropdown
      dropWrap.addEventListener("click", () => {
        let dropOpts = document.getElementById("dropOpts");

        if (dropOpts) {
          // close them
          divBorder.style.border = "1px solid #bebebe";
          nameHead.style.color = "#979797";
          subTypeVal.style.color = "#000000";
          dropOpts.style.top = "90%";
          dropOpts.style.opacity = "0";
          setTimeout(() => {
            dropOpts.remove();
          }, 400);
        } else {
          // open the options
          divBorder.style.border = "1px solid #488eff";
          nameHead.style.color = "#488eff";
          subTypeVal.style.color = "#0b4fbe";
          dropWrap.insertAdjacentHTML("beforeend", dropOptsElem);
          dropOpts = document.getElementById("dropOpts");
          setTimeout(() => {
            dropOpts.style.top = "120%";
            dropOpts.style.opacity = "1";
          }, 200);
          const options = dropWrap.getElementsByTagName("button");
          const subType = document.getElementById("submissionType");

          for (let btn of options) {
            btn.addEventListener("mouseover", () => {
              btn.style.backgroundColor = "#dae8ff";
              // btn.style.color = "#fff";
              btn.style.borderLeft = "2px solid #184997";
            });
            btn.addEventListener("mouseout", () => {
              btn.style.backgroundColor = "transparent";
              btn.style.color = "#000";
              btn.style.borderLeft = "2px solid transparent";
            });
            btn.addEventListener("click", () => {
              subType.textContent = btn.textContent;
            });
          }
        }
      });
      // Board Type Dropdown
      boardWrap.addEventListener("click", () => {
        let boardOpts = document.getElementById("boardOpts");
        if (boardOpts) {
          // close the dropdown
          bordBorder.style.border = "1px solid #bebebe";
          bordHead.style.color = "#979797";
          boardTypeVal.style.color = "#000000";
          boardOpts.style.top = "90%";
          boardOpts.style.opacity = "0";
          setTimeout(() => {
            boardOpts.remove();
          }, 200);
        } else {
          // show dropdown options
          bordBorder.style.border = "1px solid #488eff";
          boardTypeVal.style.color = "#0b4fbe";
          bordHead.style.color = "#488eff";
          boardWrap.insertAdjacentHTML("beforeend", boardDropOpts);
          boardOpts = document.getElementById("boardOpts");
          setTimeout(() => {
            boardOpts.style.top = "120%";
            boardOpts.style.opacity = "1";
          }, 200);
          const option = boardWrap.getElementsByTagName("button");
          const boardType = document.getElementById("boardType");
          // Options Hover and Click Logic
          for (let btn of option) {
            btn.addEventListener("mouseover", () => {
              btn.style.backgroundColor = "#dae8ff";
              // btn.style.color = "#FFF";
              btn.style.borderLeft = "2px solid #184997";
            });
            btn.addEventListener("mouseout", () => {
              btn.style.backgroundColor = "transparent";
              btn.style.color = "#000";
              btn.style.borderLeft = " 2px solid transparent";
            });
            btn.addEventListener("click", () => {
              boardType.textContent = btn.textContent;
            });
          }
        }
      });
    }, 300);

    // Input Effects
    setTimeout(() => {
      const fields = [
        {
          field: document.getElementById("subName"),
          header: document.getElementById("tSubmissionNameHeader"),
          border: document.getElementById("tsubmissionName"),
        },
        {
          field: document.getElementById("t_descInp"),
          header: document.getElementById("t_descHeader"),
          border: document.getElementById("tDescTicField"),
        },
      ];

      fields.forEach((item) => {
        item.field.addEventListener("focus", () => {
          item.header.style.color = "#488eff";
          item.border.style.border = "1px solid #488eff";
          item.field.style.color = "#0b4fbe";
        });
        item.field.addEventListener("focusout", () => {
          item.header.style.color = "#979797";
          item.border.style.border = "1px solid #bebebe";
          item.field.style.color = "#000000";
        });
      });
    }, 300);

    // Cancel, Submit, Radio Button Effects
    setTimeout(() => {
      // For Cancel Button
      const cancelBtn = document.getElementById("cancelBtn");

      cancelBtn.addEventListener("mouseover", () => {
        cancelBtn.style.backgroundColor = "#f36974";
      });
      cancelBtn.addEventListener("mouseout", () => {
        cancelBtn.style.backgroundColor = "#265eb9";
      });

      cancelBtn.addEventListener("click", () => {
        const modalContent = document.getElementById("modalContent");
        modalContent.style.opacity = "0";
        setTimeout(() => {
          modal.style.width = "65px";
          modal.style.height = "65px";
          modal.style.borderRadius = "100%";
        }, 350);
        setTimeout(() => {
          modal.innerHTML = modalBTN;
          const openBtn = document.getElementById("modalBTN");
          openBtn.addEventListener("click", openModal);
        }, 800);
      });

      // Submit Button Hover Effect
      const submitBtn = document.getElementById("submitBtn");

      submitBtn.addEventListener("mouseover", () => {
        submitBtn.style.backgroundColor = "#5d89d0";
      });
      submitBtn.addEventListener("mouseout", () => {
        submitBtn.style.backgroundColor = "#265eb9";
      });
    }, 300);

    // Submitting Form
    setTimeout(() => {
      const form = document.getElementById("formElem");

      form.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const data = new FormData(ev.target);
        const subType = document.getElementById("submissionType");
        const board = document.getElementById("boardType");
        const currUser = document.getElementById("currentUser");
        const nameField = document.getElementById("tsubmissionName");
        const descField = document.getElementById("tDescTicField");

        // Disable submit button while processing
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.disabled = true;

        // Restart color of border for error indicator
        nameField.style.border = "1px solid #bebebe";
        descField.style.border = "1px solid #bebebe";

        const [subName, ssImg, descr, ipAdd, locate, currUrl] = [
          ...data.entries(),
        ];
        console.log([
          currUser.textContent,
          subType.textContent,
          board.textContent,
          ...data.entries(),
        ]);
        console.log(subName, descr, currUrl, subType.textContent);

        const [nameBool, descBool] = [subName[1] === "", descr[1] === ""];
        console.log(nameBool, descBool, descr, typeof descr[1]);
        // IF incomplete fields
        if (nameBool || descBool) {
          if (nameBool) {
            nameField.style.border = "1px solid #ff4949";
          }
          if (descBool) {
            descField.style.border = "1px solid #ff4949";
          }
          // Add Error toast message
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

          submitBtn.disabled = false;
          return;
        }

        // Turn Images to base64
        console.log(ssImg[1].type);
        if (ssImg[1].type === "application/octet-stream") {
          // console.log("DataURI:", ss64);
        } else {
          const FR = new FileReader();

          FR.addEventListener("load", () => {
            ss64 = FR.result;
          });

          FR.readAsDataURL(ssImg[1]);
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

        // Create Ticket Endpoint
        const createRes = await fetch(
          "https://c58q0q4s4a.execute-api.us-east-1.amazonaws.com/createTicket",
          {
            method: "POST",
            headers: {
              auth: "Basic YW5jaG9yc2l4X2NzMStMVTh4Z3dmRkxKaEZkUFVEOmdaTlN0N1M5Vm04MW9mRjE=",
              "client-id": "dda341d3-f8bc-4fc1-9b99-e6721e35bae7",
            },
            body: JSON.stringify({
              summary: subName[1].trim(),
              board: {
                name: board.textContent.trim(),
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

        // Put Ticket Details
        const putRes = await fetch(
          "https://c58q0q4s4a.execute-api.us-east-1.amazonaws.com/putDetails",
          {
            method: "POST",
            headers: {
              // "Content-Type": "application/json",
              auth: "Basic YW5jaG9yc2l4X2NzMStMVTh4Z3dmRkxKaEZkUFVEOmdaTlN0N1M5Vm04MW9mRjE=",
              "client-id": "dda341d3-f8bc-4fc1-9b99-e6721e35bae7",
            },
            body: JSON.stringify({
              id: id.id,
              text: `Current URL: ${
                currUrl[1]
              } \nDescription:${descr[1].trim()} \nIP Address:${
                ipAdd[1]
              } \nLocation:${
                locate[1]
              } \nCurrent User:${currUser.textContent.trim()}`,
              detailDescriptionFlag: true,
              member: { id: 157 },
            }),
          }
        );
        const jason = await putRes.json();
        console.log(jason);

        // Upload Screenshot
        const uplRes = await fetch(
          "https://cdn-connectwise.srilan-catalinio.workers.dev/uploadDocument",
          {
            method: "POST",
            headers: {
              Authorization:
                "Basic YW5jaG9yc2l4X2NzMStMVTh4Z3dmRkxKaEZkUFVEOmdaTlN0N1M5Vm04MW9mRjE=",
              clientId: "dda341d3-f8bc-4fc1-9b99-e6721e35bae7",
            },
            body: JSON.stringify({
              title: subName[1],
              id: id.id,
              file: ss64,
            }),
          }
        );

        const respo = await uplRes.json();
        console.log("upload Response", respo);

        // Reset Values
        const subNameInp = document.getElementById("subName");
        const descInp = document.getElementById("descInp");
        subNameInp.value = "";
        descInp.value = "";

        // Enable submit button
        submitBtn.disabled = false;
      });
    }, 400);

    modal.innerHTML = modalContentElement;
  };

  modalBtn.addEventListener("click", openModal);

  document.addEventListener("DOMContentLoaded", function () {});
})();
