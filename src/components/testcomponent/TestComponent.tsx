function TestComponent() {
  return (
    <div className="bg-[#333] h-screen">
      <h1>
        TestComponent using package.json with main pointing to this component instead of using index
      </h1>
      <h2>also testing simple gradient effect for bg</h2>
      <div className="bg-gradient-to-t from-black to-transparent h-screen"></div>
    </div>
  );
}

export default TestComponent;
