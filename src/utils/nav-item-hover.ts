const navItemHoverIn = (navItem: string):void => {
    const navItemElement = document.getElementById(navItem);
    const underline = navItemElement?.querySelector('div');
    underline!.classList.remove('hidden');

}
const navItemHoverOut = (navItem: string):void => {
    const navItemElement = document.getElementById(navItem);
    const underline = navItemElement?.querySelector('div');
    underline!.classList.add('hidden');
}
export { navItemHoverIn, navItemHoverOut };