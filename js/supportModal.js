(function () {
  const seedId = () => {
    let id = "id" + Math.random().toString(16).slice(2);
    return id;
  };

  const modalId = `support-modal-${seedId()}`;
  const supportFormId = `support-form-${seedId()}`;
  const modalHtml = `
    <div id="${modalId}" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Support</h2>
            <form id="${supportFormId}">
                <label for="issueType">Issue Type:</label>
                <select id="issueType">
                    <option value="modify">Modify</option>
                    <option value="bug">Bug</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="other">Other</option>
                </select>
                <label for="description">Description:</label>
                <textarea id="description" rows="4" cols="50"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById(modalId);
  const closeButton = modal.querySelector(".close");
  const submitButton = modal.querySelector(`#${supportFormId} button`);

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function () {
    const floatingButton = document.createElement("button");
    floatingButton.innerText = "Support";
    floatingButton.id = "support-button";
    floatingButton.classList.add("floating-button");
    document.body.appendChild(floatingButton);
    floatingButton.addEventListener("click", openModal);
  });

  closeButton.addEventListener("click", closeModal);

  // Submit form
  document
    .getElementById(supportFormId)
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you can add logic to handle form submission (e.g., send data to server)
      alert("Form submitted!");
      closeModal();
    });
})();
