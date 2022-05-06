const Navbar = (props) => {
  const { list } = props;

  const NavItem = (props) => {
    const { item } = props;

    return (
      <li className="nav-item">
        <a
          className={"nav-link " + (item.isActive ? "active" : "")}
          aria-current="page"
          href={item.ref}
        >
          {item.value}
        </a>
      </li>
    );
  };

  const NavItems = (props) => {
    const { list } = props;
    return (
      <ul className="navbar-nav mr-auto">
        {list.map((navItem) => {
          return <NavItem key={navItem.key} item={navItem} />;
        })}
      </ul>
    );
  };

  return (
    <div className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="teste">
          Layer Cake (Possible Img)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarText"
          className="collapse navbar-collapse justify-content-end"
        >
          <NavItems list={list} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
