/**
 * Percentage threshold above which an element is considered on-screen and
 * below which it is considered off-screen.
 * The percentage does NOT refer to the amount of the element on screen.
 * Instead it refers to the percentage of the screen that is below the
 * element's top edge.
 */
const perc_threshold = 0.07;

/**
 * Calculates the percentage of the screen that is below the passed HTML
 * Element's top edge.
 * Any vertical translation is ignored, meaning that the percentage is
 * calculated as if the element were untranslated.
 * 
 * @param {Element} elem
 * @returns Percentage of the screen that is below elem's top edge, in an
 *          endpoint-inclusive range from 0 to 1 
 */
const filled_perc = elem => {
        // Account for vertical translation.
        const y_offset = new DOMMatrixReadOnly(window.getComputedStyle(elem).transform).m42;

        const perc = window.innerHeight - elem.getBoundingClientRect().top + y_offset;

        // Clamp to interval [0, 1].
        return perc < 0 ? 0 : perc > window.innerHeight ? 1 : perc / window.innerHeight;
}

/**
 * Determines whether an element is considered on-screen or off-screen, and
 * sets or removes the element's on-screen class accordingly.
 * 
 * @param {Element} elem
 */
const handle_on_screen = elem => {
        if (filled_perc(elem) > perc_threshold)
                elem.classList.add('on-screen');
        else
                elem.classList.remove('on-screen');
};

// Check for prefers-reduced-motion css media query
// (https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
// In case it matches, set everything to on-screen and leave it at that.
// Otherwise, initialize on-screen state and scroll handling.
if (window.matchMedia('(prefers-reduced-motion)').matches)
{
        document.querySelectorAll('.faded').forEach(elem => elem.classList.add('on-screen'));
}
else
{
        // Initialize on-screen class depending on the initial location of elements
        // when the page is loaded.
        document.querySelectorAll('.faded').forEach(elem => handle_on_screen(elem));
        
        // Recalculate on-screen class on every scroll.
        document.addEventListener('scroll', _ => document.querySelectorAll('.faded').forEach(elem => handle_on_screen(elem)));     
        
        // The same goes for window resizing
        window.addEventListener('resize', _ => document.querySelectorAll('.faded').forEach(elem => handle_on_screen(elem))); 
}
