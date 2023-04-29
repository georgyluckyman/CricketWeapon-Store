import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FeaturedSlider from "./FeatureSlider";

const useStyles = makeStyles((theme) => ({
  slide: {
    height: "calc(100vh - 64px)",
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
    },
  },
  slideContent: {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    textAlign: "left",
    color: "#fff",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  quote: {
    fontSize: "14px",
    width: "30vw",
    fontWeight: 300,
    marginBottom: theme.spacing(1),
  },
  saleText: {
    fontSize: "24px",
    fontFamily: "Roboto",
    fontWeight: "800",
    width: "45vw",
    marginBottom: theme.spacing(1),
  },
  productButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 3),
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: "#000",
    },
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
 
}));

const slides = [  {    image: require("../../Image/Cricket-wepon/img2.png"),    quote: "Play with passion Play with passion",    saleText:      " Play with passion Play with passion Up to 50% off ",    productText: "Shop Now",  },  {    image: require("../../Image/Cricket-wepon/03.jpg"),    quote: "Experience the game",    saleText: "Limited Time Offer ",    productText: "Buy Now",  },  {    image: require("../../Image/Cricket-wepon/01.jpg"),    quote: "Get ready to play Get ready to play ",    saleText: "New Arrivals Get ",    productText: "Explore",  },  {    image: require("../../Image/Cricket-wepon/04.jpg"),    quote: "Get ready to play",    saleText: "New Arrivals",    productText: "Explore",  },];

export default function HeroSlider() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % slides.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <Carousel
        autoPlay={true}
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        interval={5000}
        timeout={500}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            backgroundColor: "#00000088",
            borderRadius: 0,
            padding: 0,
            margin: 0,
            height: "100%",
          },
        }}
        prevButton={
          <Button
            className="slider-nav-btn prev"
            onClick={handleBack}
            startIcon={<ArrowBackIosIcon />}
          ></Button>
        }
        nextButton={
          <Button
            className="slider-nav-btn next"
            onClick={handleNext}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
        }
        fullHeightHover={false}
        className={classes.slide}
        index={activeStep}
        onChangeIndex={setActiveStep}
      >
        {slides.map((slide, index) => (
          <div key={index} className={classes.slide}>
            <img
              src={slide.image}
              alt="slider"
              className={classes.slideImage}
            />
            <div className={classes.slideContent}>
              <h2 className={classes.quote}>{slide.quote}</h2>
              <h3 className={classes.saleText}>{slide.saleText}</h3>
              <Button className={classes.productButton}>
                {slide.productText}
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="feature" style={{ marginTop: "2.7rem"  }}>
        <h2
          style={{ textAlign: "center", fontFamily: `"Archivo", sans-serif` , fontWeight : "800" }} >
          Featured Products
        </h2>
        <FeaturedSlider />
      </div>
    </>
  );
}