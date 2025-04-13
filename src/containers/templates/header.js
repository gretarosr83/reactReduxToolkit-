

const Header = () => {
  return (
    <header>
      <div className="ui secondary pointing menu">
        <a className="item active">Products</a>
        <a className="item" >Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
          <a className="ui item">Logout</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
