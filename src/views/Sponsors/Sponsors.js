// create react component
import React from "react";
import { Container, Grid, styled } from "@mui/material";
import img from "../../components/Images/Rectangle_257x257.png";
import img2 from "../../components/Images/Rectangle_168x167.png";
import img3 from "../../components/Images/Rectangle_479x540.png";

const Img = styled("img")({
  margin: "5% 0",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Sponsors = () => {
  return (
    <Container>
      <Grid container className={"sponsor-headline"}>
        <Grid item xs={12}>
          {/*Center h1 tag within container*/}
          <h1
            style={{
              textAlign: "center",
              fontSize: "4.00rem",
            }}
          >
            Our Sponsors
          </h1>
        </Grid>
      </Grid>

      <Grid container className={"sponsor-container"}>

        <Grid item xs={6} className={"left-nine-sponsors"} justifyContent={"center"}>
          <Grid container gap={"53px"} wrap={"nowrap"}>
            <Grid item xs={4}>
              <Img alt="place-holder-1" src={img} />
            </Grid>
            <Grid item xs={4}>
              <Img alt="place-holder-2" src={img} />
            </Grid>
            <Grid item xs={4}>
              <Img alt="place-holder-3" src={img} />
            </Grid>
          </Grid>
          <Grid container columnGap={"37px"} wrap={"nowrap"}>
            <Grid item xs={2}>
              <Img alt="place-holder-4" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-5" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-6" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-7" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-8" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-9" src={img2} />
            </Grid>
          </Grid>

          <Grid container columnGap={"37px"} wrap={"nowrap"} zeroMinWidth>
            <Grid item xs={2}>
              <Img alt="place-holder-10" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-11" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-12" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-13" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-14" src={img2} />
            </Grid>
            <Grid item xs={2}>
              <Img alt="place-holder-15" src={img2} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <Grid container className={"right-sponsor"} justifyContent={"center"} marginTop={"0%"}>
            <Img alt="place-holder-16" src={img3} />
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};

// export component
export default Sponsors;
