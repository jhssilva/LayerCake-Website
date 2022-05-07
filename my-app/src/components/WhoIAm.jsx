import cake from "../img/cake.jpeg";

export default function WhoIAm() {
  return (
    <div className="container who-i-am">
      <div className="row">
        <div className="col-lg-4 col-sm-12 background-pink">
          <h1>WHO I AM?</h1>
          <p>
            Hello, my name is Claudia. I'm 26 years old. I'm not a professional
            cake designer artist. It's just an hobby. I really enjoy bake layer
            cakes or cupcakes during my free time. Let me show my creations.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <img src={cake} alt="layer cake" />
        </div>
        <div className="col-lg-4 col-sm-12 background-pink">
          <p>Cooking and baking is both physical and mental therapy.</p>
          <p>Mary Berry</p>
        </div>
      </div>
    </div>
  );
}
