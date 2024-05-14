import React, { useEffect, useState } from "react";

import { useStateContext } from "../context";
import DisplayFund from "../components/DisplayFund";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const { contract, address, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return <DisplayFund campaigns={campaigns} isLoading={isLoading} />;
}
