function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Set the innerHTML to the children
    domElement.innerHTML = reactElement.children;

    // Check if props exist and iterate over them
    if (reactElement.props) {
        for (const prop in reactElement.props) {
            if (prop === 'children') continue; // Skip children
            domElement.setAttribute(prop, reactElement.props[prop]); // Set attribute
        }
    }

    // Append the created element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);