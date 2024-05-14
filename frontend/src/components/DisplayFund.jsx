import React from "react";

import CardFund from "./CardFund";

export default function DisplayFund({ isLoading, campaigns }) {
  return (
    <section className="flex items-center justify-center">
      {isLoading && (
        <div className="max-w-primary m-4 flex w-full align-baseline sm:m-6">
          <p>Loading...</p>
        </div>
      )}
      {!isLoading && (
        <div className="max-w-primary m-4 flex w-full grid-cols-3 flex-col gap-6 sm:m-6 sm:grid">
          {campaigns.map((campaign) => {
            return <CardFund key={campaign.id} {...campaign} />;
          })}
        </div>
      )}
    </section>
  );
}
