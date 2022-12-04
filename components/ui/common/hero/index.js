//import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="w-screen mx-0 px-20 py-32 text-left mb-28 grid gap-4 md:grid-cols-1 lg:grid-cols-2 bg-[url('/images/kewa_hero_bg.jpg')]">
        <div>
          <div className="mt-6 text-xl font-light text-indigo-600 antialiased">
            KEWAA ESTATE
          </div>
          <div className="text-6xl font-semibold text-gray-900 leading-none">
            Don&#39;t Just pay rent, Earn Dividend
          </div>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            Kewaa Provides a fractional investment platform for investors in
            real-estate on the blockchain.
          </div>
          <div className="mt-5 sm:mt-8 flex lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Go to Marketplace
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[url('/images/hero_image.png')] bg-cover bg-center"></div>
      </section>
      <section className="w-full mx-auto px-20 py-16 text-left mb-12 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
        <div className="bg-[url('/images/invest.png')] bg-cover bg-center"></div>
        <div>
          <div className="text-3xl font-semibold text-gray-900 leading-none">
            How does it work?
          </div>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            Kewaa enables fractional investment of rental real estate properties
            by utilizing the blockchain. Using an implementation of re-fungible
            token standard. every property is tokenized and represented as an
            NFT which is extended into a specific amount of ERC 20 tokens. the
            ERC20 tokens are an extension of each NFT and represent fractional
            ownership. each investor earn dividend from the rent paid per
            property. You can now imagine the possibilities.
          </div>
        </div>
      </section>

      <section className="w-full mx-auto px-20 py-12 text-left mb-12 grid gap-16 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="text-3xl font-semibold text-gray-900 leading-none">
            Problems we solve
          </div>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            <p>
              We believe the blockchain can transform real-estate in Africa.
            </p>
            <p>
              currently real estate is relatively illiquid as one can&#39;t
              readily convert it to cash or other assets. Kewaa can solve this!
            </p>
            <p>
              Real estate investment is capital intensive and small player
              cannot take advantage of larger deals ... kewaa give the little
              guy a chance.
            </p>
            <p>
              Kewaa will provide secondary markets where real-estate can be
              exchanged ... a property market!
            </p>
          </div>
        </div>
        <div className="bg-[url('/images/real-estate-investment-fails.jpeg')] bg-cover bg-center"></div>
      </section>

      <section className="w-full mx-auto px-20 py-12 text-center mb-12 flex justify-center">
        <div>
          <div className="mt-6 text-xl font-bold  text-indigo-600 antialiased">
            View Our
          </div>
          <div className="text-6xl py-6 font-semibold text-gray-900 leading-none">
            Property collection
          </div>
          <div className="my-5 py-6 sm:mt-8 flex lg:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Go to Marketplace
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen mx-0 px-20 py-32 text-left mb-28 grid gap-4 md:grid-cols-1 lg:grid-cols-2 bg-[url('/images/kewa_call_to_action.jpeg')]">
        <div>
          <div className="mt-6 text-xl font-light text-indigo-600 antialiased">
            KEWAA ESTATE
          </div>
          <div className="text-6xl font-semibold text-gray-900 leading-none">
            Ready to start investing?
          </div>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            Let&#39;s do it together
          </div>
          <div className="mt-5 sm:mt-8 flex lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                New Collection
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
