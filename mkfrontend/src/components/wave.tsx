// components/WaveBackground.tsx
import "./wave.css"
const WaveBackground = () => {
    return (
      <div className="ondebox">
        <svg
          className="onde"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="onda"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 
              58-18 88-18 58 18 88 18 v44h-352Z"
            />
          </defs>
          <g className="parallaxonde">
            <use href="#onda" x="48" y="0" fill="#f34e4e" />
            <use href="#onda" x="48" y="3" fill="#dc2626" />
            <use href="#onda" x="48" y="5" fill="#991b1b" />
            <use href="#onda" x="48" y="7" fill="#f9f9f9" />
          </g>
        </svg>
      </div>
    );
  };
  
  export default WaveBackground;
  