import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  div: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 190,
    height: 172,
  },
}));

const SvgIcon = () => (
  <svg
    width="190"
    height="172"
    viewBox="0 0 190 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <ellipse cx="62" cy="123.5" rx="124" ry="123.5" fill="#EF0825" />
      <path
        d="M185.5 123.5C185.5 191.429 130.209 246.5 62 246.5C-6.20907 246.5 -61.5 191.429 -61.5 123.5C-61.5 55.5709 -6.20907 0.5 62 0.5C130.209 0.5 185.5 55.5709 185.5 123.5Z"
        stroke="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-66"
        y="0"
        width="256"
        height="255"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const CircleBottomLeft = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <SvgIcon />
    </div>
  );
};

export default CircleBottomLeft;
