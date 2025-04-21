function customRender(reactElement, container)
{
// const domElement=document.createElement(reactElement.type)
// domElement.innerHTML=reactElement.children
// domElement.setAttribute('href',reactElement.props.href) // what attiribute you want to set,and where do i get it
// domElement.setAttribute('target',reactElement.props.target) 
// container.appendChild(domElement)
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for(const prop in reactElement.props){
    if(prop=='children') continue
    domElement.setAttribute(prop,reactElement.props[BarProp])
}
container.appendChild(domElement)
}
const reactElement=
{
    type: 'a',
    props: {
        href:"https://google.com",
        target : '_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.getElementById('root')
customRender(reactElement, mainContainer)