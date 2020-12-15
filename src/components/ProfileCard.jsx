import { useState, useEffect } from "react";

import { Card } from "./Card";
import { CardHeader } from "./CardHeader";
import { BarGraph } from "./BarGraph";

const barGraphLabels = {
  SG_TEE: "SG OTT",
  SG_APP: "SG APP",
  SG_ARG: "SG ARG",
  SG_PUTT: "SG PUT",
};

export const ProfileCard = ({ profile }) => {
  const [barGraphData, setBarGraphData] = useState(null);

  useEffect(() => {
    barGraphDataConstructor();
  }, [profile]);

  const barGraphDataConstructor = () => {
    const data = profile.SGCategories.map((category) => ({
      label: barGraphLabels[category.SG_Category_Detail],
      value: category["avg-SG-per-round"],
    }));
    setBarGraphData(data);
  };

  return (
    <Card>
      <CardHeader
        name={profile.PlayerName}
        location={profile?.PlayerLocation}
        quality={profile.Quality}
        handicap={profile.Handicap}
        sgTotal={profile.SGTotal}
      />
      <BarGraph dataset={barGraphData} />
      <div className="px-4.5 py-3.5 text-xs text-left">
        <span className="text-secondary">Latest Activity: </span>
        <span className="font-medium text-primary">68 (-4), The Shire, UK</span>
      </div>
      <div></div>
    </Card>
  );
};
