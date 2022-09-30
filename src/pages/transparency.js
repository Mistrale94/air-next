import React from "react";
import PropTypes from "prop-types";

import getTransparencyReport from "root/lib/getTransparencyReport";

//excluded most of the code for simplicity sake

export default function TransparencyPage({ transparencyReport }) {
  return <>
    {transparencyReport.map(reportLine => (
        <div key={reportLine.id}>
            <p>{reportLine.date}</p> &nbsp;
            <p>{reportLine.purpose}</p> &nbsp;
            <p>{reportLine.value}</p>
        </div>
    ))}
  </>;
}

TransparencyPage.propTypes = {
  transparencyReport: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps() {
  return {
    props: {
      transparencyReport: await getTransparencyReport(),
    },
  };
}