import { useState } from "react";
import { Modal } from "@components/ui/common";
import { OrderModal } from "@components/ui/order";
import { PropertyHero, Keypoints } from "@components/ui/property";
import { BaseLayout } from "@components/ui/layout";
import { getAllProperties } from "@content/properties/fetcher";

export default function Property({ property }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="py-4">
        <PropertyHero
          title={property.title}
          description={property.description}
          image={property.coverImage}
          buttonClicked={() => setIsOpen(true)}
        />
      </div>
      <Keypoints points={property.wsl} />
      <OrderModal course={property} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function getStaticPaths() {
  const { data } = getAllProperties();

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { data } = getAllProperties();

  const property = data.filter((c) => c.slug === params.slug)[0];

  return {
    props: {
      property,
    },
  };
}

Property.Layout = BaseLayout;
