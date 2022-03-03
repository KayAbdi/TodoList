// remove any item from navbar with less tham minStock
// write out both the name and the number in stock in format apple:2
function NavBar({menuitems}) {
    const {Card, Button } = ReactBootstrap;
    const [stock, setStock] = React.useState(menuitems);
    const [cart, setCart] = React.useState([]);
    const moveToCart = (e) => {
        let [name, num] = e.target.innerHTML.split(":");
        if (num <= 0) return;
        let item = stock.filter((item) => item.name == name);
        // check if item.instock > 0
        let newStock = stock.map((item) => {
            if (item.name == name) {
                item.instock--;
            }
            return item;
        });

        // filter out stock items

        setStock([...newStock]);
        setCart([...cart,...item]);
        console.log(`Cart: ${JSON.stringify(cart)}`);
    };
    const updatedList = menuitems.map((item, index) => {
        return (<Button key={index} onClick={moveToCart}>{item.name}:{item.instock}</Button>);
    });
    // note that react needs to have a single parent
    return (
        <>
            <ul key="stock" style={{listStyleType: "none"}}>{updatedList}</ul>
            <h1>Shopping Cart</h1>
            <Cart cartitems={cart}>Cart Items</Cart>
        </>
    );
};
function Cart({ cartitems }) {
    const { Card, Button } = ReactBootstrap;
    console.log("rendering cart");
    const updatedList = cartitems.map((item,index) =>{
        return <Button key={index}>{item.name}</Button>;
    });
    return (
        <ul style={{ listStyleType: "none"}} key="cart">
            {updatedList}
        </ul>
    );
}
const menuItems = [
    {name: "apple", instock: 2},
    {name: "pineapple", instock: 3},
    {name: "pear", instock: 0},
    {name: "peach", instock: 3},
    {name: "orange", instock: 1}
];
ReactDOM.render(
    <NavBar menuitems={menuItems}/>,
    document.getElementById('root')
);