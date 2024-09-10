import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <svg className={styles.svgFilters}>
        <defs>
          <filter id="turbulence-filter">
            <feTurbulence
              id="turbulence-filter__turbulence"
              type="turbulence"
              baseFrequency="0.04"
              numOctaves="1"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                from="0.03"
                to="0.04"
                dur="0.5s"
                calcMode="discrete"
                values="0.03;0.01;0.04"
                keyTimes="0;0.33333;0.66666"
                fill="freeze"
                repeatCount="indefinite"
              ></animate>
            </feTurbulence>
            <feDisplacementMap
              id="turbulence-filter__displacement"
              in2="turbulence"
              in="SourceGraphic"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
            ></feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <div className={styles.wordmark}>matt novelli</div>
    </>
  );
}
