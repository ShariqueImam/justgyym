import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{ position: "relative", display: "inline-flex", color: "#ea580c" }}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ color: "#ea580c" }}
        size="7rem"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <h2 className="text-white text-xl">{props.value}%</h2>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function CircularStatic(props) {
  const [progress, setProgress] = React.useState(71);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 100);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);
  if (progress == 99) {
    props.ending();
  }
  return <CircularProgressWithLabel value={progress} />;
}
export default React.memo(CircularStatic);
