import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // background: "#242526",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  arrowBack: {
    margin: theme.spacing(2),
    cursor: "pointer"
  },
}));

const Resume = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box component="header" className={classes.mainContainer}>
      <ArrowBackIcon
        onClick={() => history.goBack()}
        className={classes.arrowBack}
        color="error"
        fontSize="large" />
      <Typography variant="h4" align="center" className={classes.heading}>
        Professional Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Software Engineering Intern
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Meta
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            Developed the client side checkout flow in Facebook to purchase Oculus apps.
            This product was developed to grow VR users by displaying ads for Oculus apps.
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Tech Stack: ReactJS, React-Native, GraphQL, Relay, Hack
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="right"
            className={classes.subHeading}
          >
            Consultant
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            MileIQ
          </Typography>
          <Typography
            variant="subtitle1"
            align="right"
            className={classes.subtitle1}
          >
            Freelanced as a data engineering consultant for MileIQ,
            an intelligent drive detection mobile app (like fitbit for vehicles).
            I created data ingestion pipelines and one major task was rewriting the Mixpanel telemetry ingestion
            pipelines.

          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            Tech Stack: Python, Azure, SQL, Kubernetes, Apache Spark
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Software Engineer II
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Microsoft
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            UI developer for the product Viva Insights. This involved creating a dashboard
            of data-driven insights derived from various Office365 apps, to improve
            employee wellbeing and experience for our customers. This was developed on
            multiple surfaces such as web, mail and Microsoft Teams.

          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Tech Stack: ReactJS, TypeScript, Flux, Less CSS, HTML, Teams SDK
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="right"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            Microsoft
          </Typography>
          <Typography
            variant="subtitle1"
            align="right"
            className={classes.subtitle1}
          >
            Infrastrcuture engineer for an Office365 product - MileIQ. This involved
            migrating these services from Flask-Nginx to Django-Ambassador. This also involved migrating them to
            run containerized with Kubernetes.
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            Tech Stack: Kubernetes, Django, Flask, Azure DevOps, Nginx
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Microsoft
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            I was a data platform engineer for an Office365 product - MileIQ. I built a platform
            engineers to analyze A/B testing metrics and run data science experiments. This helped
            create tools to improve our product's intelligence features. Scaling the product to interact
            with daily streams of 20GB of data
            and bringing down infrastrcuture cost by 50% were some of the key successes.

          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Tech Stack: Python, Azure, SQL, Kubernetes, Apache Spark
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Software Engineering Intern
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            Samsung
          </Typography>
          <Typography
            variant="subtitle1"
            align="right"
            className={classes.subtitle1}
          >
            Summer SWE Intern - Optimized the deployment model of the LTE services by improving the fault detection and scalability.

          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            Tech Stack: Bash, Perforce
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
