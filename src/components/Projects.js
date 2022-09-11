import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import mileiq from "../images/mileiq-vector-logo.svg";
import myAnalytics from "../images/microsoft-myanalytics.png"
import remoteSense from "../images/remoteSense.jpeg"
import office365 from "../images/office365.png"
import ethereum from "../images/ethereum.png"
import oculus from "../images/oculus.png"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  arrowBack: {
    margin: theme.spacing(2),
    cursor: "pointer"
  },
  mainContainer: {
    background: "#1F2022",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  image: {
    width: "auto",
  }
}));

const projects = [
  {
    name: "Office365 - Data",
    description: `Lead data platform engineer for the product MileIQ to track feature engagement and A/B testing
    metrics using Azure Data Factory and SQL Data Warehouse.`,
    image: office365,
    height: 90,
    margin: 0,
    link: "https://www.microsoft.com/en-us/microsoft-365"
  },
  {
    name: "Office365 - Infrastructure",
    description: `Infrastructure engineer for the product MileIQ - using Azure Kubernetes
    Services. This was used to build the OLAP platform as well as product microservices.`,
    image: office365,
    height: 90,
    margin: 0,
    link: "https://www.microsoft.com/en-us/microsoft-365"
  },
  {
    name: "MyAnalytics",
    description: `Developed the MyAnalytics Insights dashboard & Teams app for Business Executives from
    Outlook calendar data.`,
    image: myAnalytics,
    height: 50,
    margin: 20,
    link: "https://docs.microsoft.com/en-us/viva/insights/personal/use/dashboard-2"
  },
  {
    name: "RemoteSense.io",
    description: `Developed real-time data feeds from IOT sensors to remotely monitor production and 
    created actionable dashboards for the same.`,
    image: remoteSense,
    height: 70,
    margin: 10,
    link: "http://remotesense.io/"
  },
  {
    name: "MileIQ",
    description: `Fixed the security vulnerabilities in the data system and developed pipelines to ingest Braze data.`,
    image: mileiq,
    height: 30,
    margin: 30,
    link: "https://mileiq.com/"
  },
  {
    name: "Oculus Ads",
    description: `Developed the client side checkout flow in Facebook to purchase Oculus apps. This product was
    developed to grow VR users by displaying Facebook users ads for Oculus apps.`,
    image: oculus,
    height: 70,
    margin: 0,
    link: "https://www.oculus.com/experiences/"
  },
  {
    name: "MedLab",
    description: `The MEDLab at CU Boulder focuses primarily on building a fair internet economy with decentralized solutions,
    like blockchain.  I am currently doing an independent study under the guidance of Dr. Bo
    Waggoner and the MEDLab director Nathan Schneider`,
    image: ethereum,
    height: 40,
    margin: 20,
    link: "https://www.colorado.edu/lab/medlab/2022/02/21/open-call-bring-decentralized-tools-your-community"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box component="div" className={classes.mainContainer}>
      <ArrowBackIcon
        onClick={() => history.goBack()}
        className={classes.arrowBack}
        color="error"
        fontSize="large" />
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt={project.name}
                height={project.height ?? 30}
                image={project.image}
                className={classes.image}
                style={{ margin: project.margin + "px auto" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" target={"_blank"} href={project.link}>
                  MORE INFO
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
