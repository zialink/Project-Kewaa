import { Hero, Breadcrumbs } from "@components/ui/common";
import { PropertyList, PropertyCard } from "@components/ui/property";
import { BaseLayout } from "@components/ui/layout";
import { LandingNav } from "@components/ui/common/landingNavbar";
import Image from "next/image";
import { ServiceCard } from "@components/ui/common/service-card";
import { Footer } from "@components/ui/common";

export default function Home({ properties }) {
  return (
    <>
      <div className="bg-indigo-600 h-full w-screen">
        <LandingNav />
        <div className="h-fit py-5 justify-evenly flex">
          <div>
            <h1 className="translate-y-56 -translate-x-48 w-64 text-3xl font-mono">
              Own, invest in real Estate in a secure, fast and easy way{" "}
            </h1>
          </div>
          <div className="absolute rounded-md h-fit w-fit">
            <Image
              src="/images/pexels-binyamin-mellish-106399.jpg"
              height="500px"
              width="700px"
              className="rounded-lg"
            />
          </div>
          <div className="ml-24 -mt-24  text-xl translate-x-64 translate-y-80">
            <div className=" flex mb-10">
              <p className="flex mr-10 flex-col">
                <span className="text-4xl font-bold hover:underline text-indigo-600">
                  {" "}
                  300+{" "}
                </span>{" "}
                <span className="text-center text-sm">properties listed</span>
              </p>

              <p className="flex flex-col">
                <span className="text-4xl font-bold text-indigo-600 hover:underline">
                  {" "}
                  1320000+{" "}
                </span>{" "}
                <span className="text-center text-sm">total invested</span>
              </p>
            </div>
            <div className="flex">
              <p className="flex mr-16 flex-col">
                <span className="text-4xl font-bold hover:underline text-indigo-600">
                  {" "}
                  220+{" "}
                </span>{" "}
                <span className="text-center text-sm">investors</span>
              </p>
              <p className="flex flex-col ml">
                <span className="text-4xl font-bold hover:underline text-indigo-600">
                  {" "}
                  165+{" "}
                </span>{" "}
                <span className="text-center text-sm">properties sold</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-64 bg-indigo-600 min-h-screen w-screen">
        <div>
          <p className="pt-48 text-center text-3xl font-serif text-white">
            Our Services
          </p>
          <div>
            <ServiceCard />
          </div>
          <p className="pt-24 text-center text-3xl font-serif text-white">
            What problem are we solving?
          </p>
          <p className="text-center pt-3 px-48 text-xl font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <p className="pt-24 text-center text-3xl font-serif text-white">
            How are we solving it?
          </p>
          <p className="text-center pt-3 px-48 text-xl font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <p className="pt-24 text-center text-3xl font-serif text-white">
            What's Next?
          </p>
          <p className="text-center pt-3 px-48 text-xl font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <p className="pt-24 text-center text-3xl font-serif text-white">
            Meet the Team
          </p>
          <div>
            <div>
              <Image
                src="/images/crytopunk.png"
                alt="person"
                height="200px"
                width="200px"
              />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
