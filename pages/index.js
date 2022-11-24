import { Hero, Breadcrumbs } from "@components/ui/common";
import { PropertyList, PropertyCard } from "@components/ui/property";
import { BaseLayout } from "@components/ui/layout";
import { getAllProperties } from "@content/properties/fetcher";

export default function Home({ properties }) {
  return (
    <>
      <Hero />
      <PropertyList properties={properties}>
        {(property) => <PropertyCard property={property} key={property.id} />}
      </PropertyList>
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

Home.Layout = BaseLayout;
