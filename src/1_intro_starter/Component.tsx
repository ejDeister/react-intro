// Note the fact that we manually import the CSS related to the component, making CSS debugging much easier.
import "./Component.css";

function Component({ name }: { name: string}) {
    return (
        <>
            {/*== Write your JSX here! ==*/} 
            <p>Hello {name}!</p>
        </>
    )
}

/**
 * 1. What does this do?
 * 2. What does default mean in this context?
 * 3. What all can be exported in a .js, .ts, .jsx, or .tsx file?
 */
export default Component;


/**
 * React is a JS library built to address three primary issues with vanilla JS:
 * 1. It's hard to cleanly create components using DOM Manipulation.
 * 2. Propogating state changes is tedious and complicated.
 * 3. DOM APIs such as querySelector are inherenltly decoupled from the state of the DOM.
 * 
 * Its name comes from the fact that it rectifies these issues by providing code that Reacts 
 * to the current state of the DOM and vice versa.
 * 
 * Issue #1 is handled by combining JS with XML-like notation in a new format called JSX. You can
 * think of it alost like allowing an HTML-like syntax directly in JS.
 * 
 * Issue #2 and #3 are handled through what are referred to as React hooks. These are utility functions
 * of varying purpose central to what React aims to achieve. The most common one, useState, provides a 
 * way of referencing a changing value in multiple elements/components without worrying about updating
 * each component every time the value changes.
 * 
 * Example:
 * Imagine you are building an ecommerce website. When users log into their account, their name appears
 * by their profile image, but also in the welcome mesage. 
 * 
 * This is simple enough with DOM Manipulation - just update the two elements' text content when the 
 * login is complete. But you quickly find that there are more places on the page where the user's 
 * name should appear. Eventually, the function to update the user's name in all these different spots 
 * on the page gets unreasonably long, and the code to do this looks very repetitive yet in a way that is
 * difficult to abstract.
 * 
 * With useState however, you simply reference the name of the username variable wherever it needs to appear,
 * then update the variable using the function that useState provides. React handles all of the re-rendering
 * automatically.
 * 
 * When it comes time to create a search results page, you run into another issue - how do you display a grid
 * of products that differs based on the query and filters? 
 * 
 * Again, React comes in clutch with its graceful component hierarchies. Simply create an abstract ProductCard 
 * component, then map the search results onto an array of ProductCard instances, and then reference said array 
 * in the encompassing ResultsGrid component. React will not only populate the properties - or "props" - automatically, 
 * but merely referencing an array of JSX elements within another JSX element will render each of the array members in the parent.
 */