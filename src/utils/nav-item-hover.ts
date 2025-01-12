const navItemHoverIn = (navItem: string) => {
    const navItemElement = document.getElementById(navItem);
    const underline = navItemElement?.querySelector('div');
    underline!.classList.remove('hidden');

}
const navItemHoverOut = (navItem: string) => {
    const navItemElement = document.getElementById(navItem);
    const underline = navItemElement?.querySelector('div');
    underline!.classList.add('hidden');
}
export { navItemHoverIn, navItemHoverOut };