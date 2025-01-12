
const scrollToNextSection = (_nextSection: string) => {
    const nextSection = document.getElementById(_nextSection);
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    }
}

export { scrollToNextSection };