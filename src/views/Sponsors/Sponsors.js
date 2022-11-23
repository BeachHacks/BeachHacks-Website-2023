// create react component
import React from "react";
import { Container, Grid, styled } from "@mui/material";
import img from "../../components/Images/Rectangle_122.png";
import img2 from "../../components/Images/Rectangle_479x540.png";
const Img = styled("img")({
  margin: "auto",
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
      <Grid
        container
        spacing={2}
        direction={"row"}
        className={"sponsor-row"}
        justifyContent="flex-start"
        flexGrow={1}
        style={{}}
      >
        <Grid item xs={2}>
          <Img alt="place-holder-1" src={img} />
        </Grid>
        <Grid item xs={2}>
          <Img alt="place-holder-2" src={img} />
        </Grid>
        <Grid item xs={2}>
          <Img alt="place-holder-3" src={img} />
        </Grid>
      </Grid>
    </Container>
  );
};

// export component
export default Sponsors;
