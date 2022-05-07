export default function StepByStep() {
  const LeftSideInformation = () => {
    return (
      <ul style={{ listStyleType: "none" }}>
        <li>Step By Step</li>
        <li>How to Bake a Layer</li>
        <li>Cake</li>
        <li>How to Bake Cupcakes</li>
        <li>And More...</li>
      </ul>
    );
  };

  const RightSideInformation = () => {
    return (
      <ul>
        <li>Tools</li>
        <li>Ingredients</li>
        <li>Recipe</li>
        <li>Step</li>
        <li>Decoration</li>
      </ul>
    );
  };

  return (
    <div className="container step-by-step">
      <div className="step-img">
        <div className="row">
          <div className="col-12 col-lg-6">
            <LeftSideInformation />
          </div>
          <div className="col-12 col-lg-6">
            <RightSideInformation />
          </div>
        </div>
      </div>
    </div>
  );
}
