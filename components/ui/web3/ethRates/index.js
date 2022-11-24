import { useEthPrice } from "@components/hooks/useEthPrice";
import Image from "next/image";

export default function EthRates() {
  const { eth } = useEthPrice;

  return (
    <div className="mb-5 grid grid-cols-4">
      {eth && (
        <>
          <div className="flex flex-1 items-stretch text-center">
            <div className="rounded-md border p-10 drop-shadow">
              <div className="flex items-center">
                <Image
                  layout="fixed"
                  height="35"
                  width="35"
                  src="/small-eth.webp"
                  alt="ethereum icon"
                />
                <span className="text-2xl font-bold">1 - ${eth.data}</span>
              </div>
              <p className="text-xl text-gray-500">Current eth Price</p>
            </div>
          </div>
          <div className="flex flex-1 items-stretch text-center">
            <div className="rounded-md border p-10 drop-shadow">
              <div>
                <span className="flex items-center text-2xl font-bold">
                  $15 -
                  <Image
                    layout="fixed"
                    height="35"
                    width="35"
                    src="/small-eth.webp"
                    alt="ethereum icon"
                  />
                  {eth.perItem}
                </span>
              </div>
              <p className="text-xl text-gray-500">Price per course</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
