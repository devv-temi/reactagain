const planets = [
  { name: "Mars", isGasPlant: false },
  { name: "Earth", isGasPlant: false },
  { name: "Jupiter", isGasPlant: true },
  { name: "Venus", isGasPlant: false },
  { name: "Neptune", isGasPlant: true },
  { name: "Uranus", isGasPlant: true },
  { name: "Saturn", isGasPlant: true },
];

function Planets() {
  return (
    <div>
      {planets
        .filter((planet) => planet.isGasPlant)
        .map((planet, key) => (
          <h3 key={key}>
            {planet.name} {planet.isGasPlant.toString()}
          </h3>
        ))}
    </div>
  );
}

export default Planets;

{/* <h2>Gas Planets</h2>
      <Planets /> */}