const Home = (props) => {
  return (
    <div>
      <div bg="dark" variant="dark">
        <span>React Bootstrap</span>
        <div className="mr-auto">
          <span>Home</span>
          <span>Getting Started</span>
        </div>
        <div title="v1.6.0 (Bootstrap 4.6)" id="basic-nav-dropdown">
          <span>v0.33.1 (Bootstrap 3)</span>
        </div>
      </div>
      <div fluid={true}>
        <div className="rw">
          <div className="content-body">
            <div>
              <h1 className="content-header">React Bootstrap</h1>
            </div>
            <div className="content-row">
              The most popular front-end framework
            </div>
            <div className="content-row">Rebuilt for React.</div>
            <div>
              <div>
                <button variant="outline-light">Get Started</button>
              </div>
              <div>
                <button variant="outline-light" disabled>
                  Components
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2 className="col-headers">Rebuilt with React </h2>
            React-Bootstrap replaces the Bootstrap Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum eu malesuada augue,
            efficitur pharetra mi. Morbi non rutrum ex. Mauris mollis pulvinar
            quam, sed pellentesque nulla commodo at. Ut volutpat ligula non
            ullamcorper dapibus. Curabitur sit amet metus quis enim eleifend
            fringilla. Nam in risus cras amet.
          </div>
          <div>
            <h2 className="col-headers">Bootstrap at its core </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </div>
          <div>
            <h2 className="col-headers">Accessible by default </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
