//When we create a react component and render it (behind the scene looks like this)

// .render() behind the scene work like this
function renderElement (elem,container)
{
    let newElement =document.createElement(elem.type);
    newElement.innerHTML=elem.children;

    for (const property in reactElement.props) {
        if (property === "children") continue;
        else {
            newElement.setAttribute(property,reactElement.props[property])
        }
    }
    container.appendChild(newElement);

}

const mainContainer= document.querySelector("#root");

// When we define hmtl element in react functional component behind the scene work like this
const reactElement = 
{
    type: "a",
    props:{
        href: "https://www.google.com",
        target: "_main"
    },
    children:"Go to google"
};

renderElement(reactElement,mainContainer);