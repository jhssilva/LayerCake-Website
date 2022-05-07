import river from "../img/river.jpeg";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="background-black position-absolute cover-fullscreen">
        <img
          className="cover-fullscreen opacity-60"
          src={river}
          alt="welcome"
        />
      </div>
      <div className="position-relative cover-fullscreen d-flex pt-5 justify-content-between">
        <div className="left">
          <div className="bar"></div>
        </div>
        <div className="middle d-flex">
          <div className="top">
            <h3>Welcome to </h3>
          </div>
          <div className="mid">
            <h1>Layer Cakes</h1>
            <h1>Cupcakes</h1>
          </div>
          <div className="bottom">
            <h4>Recipe made by Claudia</h4>
          </div>
        </div>
        <div className="right">
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}
