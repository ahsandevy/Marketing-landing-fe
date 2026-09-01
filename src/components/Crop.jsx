export default function Crop({ src, box, imgStyle, alt = "" }) {
  return (
    <div className="abs crop" style={box}>
      <img src={src} alt={alt} width={box.width} height={box.height} style={imgStyle} />
    </div>
  );
}
