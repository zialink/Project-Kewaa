import { useAccount } from "@components/hooks/web3/useAccount";
import { useNetwork } from "@components/hooks/web3/useNetwork";
import { Breadcrumbs, Button } from "@components/ui/common";
import { PropertyCard, PropertyList } from "@components/ui/property";
import { BaseLayout } from "@components/ui/layout";
import { OrderModal } from "@components/ui/order";
import { EthRates, WalletBar } from "@components/ui/web3";
import { getAllProperties } from "@content/properties/fetcher";
import { useState } from "react";

export default function Marketplace({ properties }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { account } = useAccount();
  const { network } = useNetwork();

  const canPurchaseProperty = !!(account.data && network.isSupported);
  return (
    <>
      <div>
        <WalletBar address={account.data} network={network} />
        <Breadcrumbs />
        <EthRates />
      </div>
      <PropertyList properties={properties}>
        {(property) => (
          <PropertyCard
            property={property}
            key={property.id}
            disabled={!canPurchaseProperty}
            Purchase={() => {
              return (
                <div className="mt-4">
                  <Button
                    onClick={() => setSelectedProperty(property)}
                    className="absolute bottom-0 right-0"
                    variant="lightPurple"
                    disabled={!canPurchaseProperty}
                  >
                    Purchase
                  </Button>
                </div>
              );
            }}
          />
        )}
      </PropertyList>
      {selectedProperty && (
        <OrderModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllProperties();
  return {
    props: {
      properties: data,
    },
  };
}

Marketplace.Layout = BaseLayout;
