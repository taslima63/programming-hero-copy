const milestonesData = JSON.parse(data).data;

// load course milestone data

function loadMilestone() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestonesData.map(function (milestone) {
        return `<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div onclick="openMilestone(this,${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
              <p> ${milestone.modules.name}</p>
            </div>`;
        }).join("")}
        </div>
      </div>`;
    }).join("")}`;
}

function openMilestone(milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    const active = document.querySelector(".active");
    // remove previous active class if any other than the clicked one
    if (active && !milestoneElement.classList.contains("active")) {
        active.classList.remove("active");
    }
    // toggle current clicked one
    milestoneElement.classList.toggle("active");

    // hide previous panel if any other than the current one
    if (!currentPanel.classList.contains("show") && shownPanel) {
        shownPanel.classList.remove("show");
    }

    currentPanel.classList.toggle('show');

    showMileStone(id);

}

function showMileStone(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const details = document.querySelector(".details");

    milestoneImage.src = milestonesData[id].image;
    name.innertext = milestonesData[id].name;
    details.innertext = milestonesData[id].description;

}


loadMilestone();