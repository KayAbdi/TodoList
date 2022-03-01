// <--This is Lists.jsx-->

// const numbers = [1, 2, 3, 4, 5];

// const updatedNums = numbers.map((number,index) => {
//     return <li key={index.toString()}>{number}</li>;
// });



// ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById('root'));

// <--navBar.jsx-->
function NavBar(props) {
    const list = props.menuitems;
    const {Button} = ReactBootstrap;

    const handleClick = (e) => {
        alert(`you clicked on ${e.target.innerHTML}aad`);
    }

    const updatedList = list.map((listItems,index) =>{
        return <Button onClick={handleClick} key={index}>{listItems}</Button>;
    });

    return <div>{updatedList}</div>;
}
const menuItems = [1,2,3,4,5];
ReactDOM.render(
    <NavBar menuitems={menuItems} />,
    document.getElementById('root')
);