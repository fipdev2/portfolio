
const scrollToNextSection = (_nextSection: string):void => {
    const nextSection = document.getElementById(_nextSection);
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    }
}

export { scrollToNextSection };