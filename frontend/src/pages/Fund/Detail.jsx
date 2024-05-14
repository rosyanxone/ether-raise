import { useParams } from "react-router-dom";
import { useStateContext } from "../../context";
import { useEffect, useState } from "react";

export default function Detail() {
  const { slug } = useParams();
  const { getCampaigns, getDonations, contract, address } = useStateContext();

  const [campaign, setCampaign] = useState(null);
  const [donators, setDonators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (contract) {
      getCampaigns().then((campaigns) => {
        const data = campaigns.find((campaign) => campaign.slug === slug);

        setCampaign(data);
        setIsLoading(false);

        getDonations(1).then((data) => {
          setDonators(data);
        });
      });
    }
  }, [address, contract]);

  return (
    <div className="flex justify-center">
      <div className="max-w-primary m-4 w-full sm:m-6">
        <ul className="list-inside list-disc">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <li>Judul: {campaign.title}</li>
              <li>Deskripsi: {campaign.description}</li>
              <li>Terkumpul: {campaign.amountCollected}</li>
              <li>Target: {campaign.target}</li>
              <li>Progress: 70%</li>
            </>
          )}
        </ul>
        <div className="mt-4">Donatur:</div>
        <ol className="list-inside list-decimal">
          {donators &&
            donators.map((donator) => {
              return (
                <li key={donator.id}>
                  {donator.donator}, 26/11/24, {donator.donation}ETH
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}
