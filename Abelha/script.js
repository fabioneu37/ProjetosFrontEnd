const beeModel = document.getElementById("bee-model");
const sections = Array.from(document.querySelectorAll("section"));

const sectionOffsets = sections.map(section => section.offsetTop);
const lastSectionIndex = sections.length - 1;

const getScrollProgress = scrollY => {
    for(let i = 0; i < lastSectionIndex; i++){
        if(scrollY >= sectionOffsets[i] && scrollY < sectionOffsets[i + 1]){
            return i + (scrollY - sectionOffsets[i]) / (sectionOffsets[i +1] - sectionOffsets[i])
        }
    }

    return lastSectionIndex;
};

window.addEventListener("scroll", () => {
    const scrollProgress = getScrollProgress(window.scrollY);
    const sectionIndex = Math.floor(scrollProgress);
    const sectionProgress = scrollProgress - sectionIndex;
    console.log(sectionProgress);
});