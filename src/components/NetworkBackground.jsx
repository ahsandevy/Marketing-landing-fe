import network from "../assets/network.png";

export default function NetworkBackground() {
  return (
    <>
      <div className="abs" style={{ left: 0, top: 3131, width: 1439, height: 769, background: "linear-gradient(to top, #f5f5e6 31.951%, rgba(255,255,255,0.71))" }} />
      <div className="abs" style={{ left: 0, top: 1791, width: 1440, height: 651, background: "linear-gradient(to top, #f5f5e6 31.951%, rgba(255,255,255,0.71))" }} />
      <img className="abs network" src={network} alt="" width={2356} height={1324} style={{ left: 0, top: 109, width: 2356, height: 1324, transform: "rotate(180deg)" }} />
      <img className="abs network" src={network} alt="" width={2356} height={1324} style={{ left: 0, top: 1433, width: 2356, height: 1324, transform: "scaleY(-1) rotate(180deg)" }} />
      <img className="abs network" src={network} alt="" width={2356} height={1324} style={{ left: 0, top: 2757, width: 2356, height: 1324, transform: "rotate(180deg)" }} />
    </>
  );
}
