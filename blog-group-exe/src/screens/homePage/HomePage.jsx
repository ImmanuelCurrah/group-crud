// Laura added Layout to homepage
import React from "react";
import Layout from "../../components/layout/Layout";
import classes from "./HomePage.module.css"

export default function HomePage() {
  return (
    <Layout>
      <div className={classes.container}>
        <img src="https://media.giphy.com/media/b7lp44pNiRqsU/giphy.gif" alt="nintendo"/>
      </div>
    </Layout>
  );
}
