import { useWeb3 } from "@components/providers";

export default function WalletBar({ address, network }) {
  const { requireInstall } = useWeb3();
  return (
    <section className="mt-10 rounded-lg bg-indigo-600 text-white">
      <div className="p-8">
        <h1 className="text-2xl">Hello, {address}</h1>
        <h2 className="subtitle mb-5 text-xl">
          I hope you are having a great day!
        </h2>
        <div className="flex items-center justify-between">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
              >
                Learn how to purchase
              </a>
            </div>
          </div>
          <div>
            {requireInstall && (
              <div className="rounded-lg bg-red-400 p-4">
                Cannot connect to a network. Please Install Metamask.
              </div>
            )}
            {network.data && (
              <>
                {!network.isSupported && (
                  <div className="rounded-lg bg-red-400 p-4">
                    <div>Connected to the wrong network</div>
                    <div>
                      connect to:{` `}
                      <span
                        onClick={() => network.switchNetwork()}
                        className="cursor-pointer"
                      >
                        <strong className="text-2xl">{network.target}</strong>
                      </span>
                    </div>
                  </div>
                )}
                <div>
                  <span>Currently on </span>
                  <strong className="text-2xl">{network.data}</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
