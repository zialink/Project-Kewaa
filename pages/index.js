import { LandingNav } from "@components/ui/common/landingNavbar";
import Image from "next/image";
import { ServiceCard } from "@components/ui/common/service-card";
import { Footer } from "@components/ui/common";
import { TeamProfile } from "@components/ui/common/team_profile";

export default function Home() {
  return (
    <>
      <div className="bg-indigo-600 h-full">
        <LandingNav />
        <div className="w-full lg:h-16 md:h-16 h-32  bg-indigo-700 flex"></div>
        <div className="h-fit py-5 justify-evenly lg:flex md:flex-none  ">
          <div>
            <h1 className="lg:translate-y-56 lg:-translate-x-48 md:translate-y-[600px] md:translate-x-24 w-64 text-3xl font-mono">
              Own, invest in real Estate in a secure, fast and easy way{" "}
            </h1>
          </div>
          <div className="lg:absolute md:relative mt-10 mx-2 rounded-lg h-fit lg:w-fit md:w-5/6 lg:ml-0 md:ml-36 lg:mt-16 md:-mt-24  ">
            <Image
              src="/images/pexels-binyamin-mellish-106399.jpg"
              height="400px"
              width="700px"
              className="rounded-2xl justify-center "
            />
          </div>
          <div className="ml-24 -mt-24 text-xl lg:translate-x-64 md:translate-x-1/2 lg:translate-y-80 md:translate-y-64 translate-y-64">
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

      <div className=" mt-64  bg-indigo-600 min-h-screen w-screen">
        <div>
          <p
            id="services"
            className="lg:pt-48 md:pt-48 pt-24 text-center text-3xl font-serif text-white"
          >
            Our Services
          </p>
          <div>
            <ServiceCard />
          </div>
          <p className="pt-24 text-center text-3xl font-serif text-white">
            What problem are we solving?
          </p>
          <p className=" text-center pt-3 lg:px-48 md:px-24 px-10 text-xl font-semibold z-10">
            Commercial real estate constitutes a significant portion of world
            economic asset and transaction activity. According to an MSCI
            report, the size of the professionally managed global real estate
            investment market increased from $7.4 trillion in 2016 to $8.5
            trillion in 2017. Today’s real estate market however, consists of
            many siloed and independent networks with transactional friction and
            opacity between existing systems. Kewaa Capital presents a practical
            solution to realize the following industry benefits: Tokenization of
            real estate assets, Process efficiency for underlying industry
            operations, Reduced costs from process automation, Access to global
            asset distribution, Access to broader investor pools due to
            ownership fractionalization, Access to secondary market
            opportunities, Data accessibility to increase transparency and
            inform better investment decisions and portfolio management
          </p>
          <p className="pt-24 text-center text-3xl font-serif text-white">
            How are we solving it?
          </p>
          <p className="text-center pt-3 lg:px-48 md:px-24 px-10 text-xl font-semibold">
            A system that creates fractional ownership of rented real estate
            properties and having the investors earn dividend from the revenue
            collected as rent. Real estate properties are listed and tokenised
            as an NFT's but these are fractionalised into fungible tokens
            (ERC20), Investors buy the fractional tokens to claim ownership of
            the property. <br/>One of the most exciting ways Ethereum benefits the
            industry is through the digital securitization of real estate
            properties, also known as tokenization. Digital assets can represent
            real-world assets such as real estate, real estate funds, revenue
            streams, governance rights, and more. Once these assets are
            tokenized, they can be divided into more granular pieces, made
            accessible to a wider pool of investors, and leveraged to raise
            capital. Once tokenized, the programmable Ethereum blockchain
            enables the secure and compliant digitization of the transactions
            and processes around these assets, including issuance, trading, and
            lifecycle management. In the real estate market, the advice,
            knowledge, and know-how of real estate professionals will remain
            crucial to commercial buyers. However, the processing of securities,
            liability management, document processing, and accounting will
            inevitably change.
          </p>
          <p className="pt-24 text-center text-3xl font-serif text-white">
            What's Next?
          </p>
          <p className="text-center pt-3 lg:px-48 md:px-24 px-10 text-xl font-semibold">
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
          <div className="flex lg:px-0 md:px-0 px-2 justify-center gap-10 pt-5 pb-24">
            <TeamProfile
              image={`/images/crytopunk.png`}
              name="John Doe"
              skill="Frontend dev."
            />
            <TeamProfile
              image={`/images/crytopunk.png`}
              name="John Doe"
              skill="Frontend dev."
            />
            <TeamProfile
              image={`/images/crytopunk.png`}
              name="John Doe"
              skill="Frontend dev."
            />
            <TeamProfile
              image={`/images/crytopunk.png`}
              name="John Doe"
              skill="Frontend dev."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
