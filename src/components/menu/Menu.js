import menu from "../../json/menu.json";

function Menu() {
  return (
    <nav id="colorlib-main-menu" role="navigation" className="navbar">
      <div id="navbar" className="collapse">
        <ul>
          {menu.map((menuItem, index) => {
            return (
              <li className={index === 0 ? "active" : ""}>
                <a
                  href={menuItem.url !== "" ? menuItem.url : "#"}
                  data-nav-section={menuItem["data-nav"]}
                >
                  {menuItem.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
