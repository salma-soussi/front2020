import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import HeadSection2 from "./HeadSection2";
import FeatureSection from "./FeatureSection";
import FeatureSection2 from "./FeatureSection2";
import PricingSection from "./PricingSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <br />
      <FeatureSection />
      <br />
      <br />
      <br />
      <PricingSection />
      <br />
      <FeatureSection2 />
      <br />
      <br />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
