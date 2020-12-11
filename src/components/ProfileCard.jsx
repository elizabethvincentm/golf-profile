import { Card } from "./Card";
import { CardHeader } from "./CardHeader";
import { BarGraph } from "./BarGraph";
import { LineChart } from "./LineChart";
import { useState, useEffect } from "react";

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
      <div class="flex justify-center">
        {/* <LineChart data={data} width={400} height={300} /> */}
        {/* <div className="py-4 pr-2 text-sm leading-none">
          <div className="mb-2">SG OTT</div>
          <div className="mb-2">SG APP</div>
          <div className="mb-2">SG ARG</div>
          <div className="mb-2">SG PUT</div>
        </div> */}
        <BarGraph dataset={barGraphData} />
      </div>
    </Card>
  );
};
