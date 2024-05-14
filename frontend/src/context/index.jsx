import { createContext, useContext } from "react";
import {
  useContract,
  useMetamask,
  useConnect,
  useDisconnect,
  useAddress,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

import { convertToSlug } from "../utils";

const StateContext = createContext();
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(contractAddress); 

  const connect = useConnect();
  const disconnect = useDisconnect();
  const address = useAddress();

  if (address == "undefined") {
    connect();
  }

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");

    const parsedCampaings = campaigns.map((campaign, i) => ({
      id: i,
      owner: campaign.owner,
      title: campaign.title,
      slug: convertToSlug(campaign.title),
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString(),
      ),
      image: campaign.image,
    }));

    return parsedCampaings;
  };

  const getDonations = async (id) => {
    const donations = await contract.call("getDonators", [id]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        id: i,
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        contract,
        connect,
        disconnect,
        address,
        getCampaigns,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
