import MenuItems from "../menuItems";

function Menu({ menuItemsData }) {
  return (
    <div>
      {menuItemsData.map((menuItemsData) => (
        <MenuItems key={menuItemsData.id} {...menuItemsData} />
      ))}
    </div>
  );
}

export default Menu;
