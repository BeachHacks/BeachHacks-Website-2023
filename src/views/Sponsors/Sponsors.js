// create react component
import React from "react";
import { Container, Grid } from "@mui/material";
import img1 from "../../components/Images/Rectangle_122.png";

const Sponsors = () => {
  return (
    <Container>
      <Grid container className={"sponsor-headline"}>
        <Grid item xs={12}>
          {/*Center h1 tag within container*/}
          <h1 style={{ textAlign: "center" }}>Our Sponsors</h1>
        </Grid>
      </Grid>
      <Grid
        container
        direction={"row"}
        className={"sponsor-1-col"}
        justifyContent="space-between"
      >
        <Grid item xs={2}>
          <img
            src={img1}
            alt={"placeholder-1"}
            style={{
              width: 100,
              height: 100,
              display: "flex",
              justifyContent: "flex-start",
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <img
            src={img1}
            alt={"placeholder-2"}
            style={{ height: 100, width: 100 }}
          />
        </Grid>
        <Grid item xs={2}>
          <img
            src={img1}
            alt={"placeholder-3"}
            style={{ height: 100, width: 100 }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          className={"big-placeholder"}
          justifyContent={"flex-end"}
        >
          <img
            src={img1}
            alt={"placeholder-big"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 60,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

// export component
export default Sponsors;
