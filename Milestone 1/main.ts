const toggleButton = document.getElementById(`toggle-skills`) as HTMLButtonElement;
const toggleSkills = document.getElementById(`skills`)as HTMLElement;

toggleButton.addEventListener(`click`, ()=>{
    if(toggleSkills.style.display == "none"){
        toggleSkills.style.display = "block";
    }else{
        toggleSkills.style.display = "none";
    }
})