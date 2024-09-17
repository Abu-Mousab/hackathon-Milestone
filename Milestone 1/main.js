"use strict";
const toggleButton = document.getElementById(`toggle-skills`);
const toggleSkills = document.getElementById(`skills`);
toggleButton.addEventListener(`click`, () => {
    if (toggleSkills.style.display == "none") {
        toggleSkills.style.display = "block";
    }
    else {
        toggleSkills.style.display = "none";
    }
});
