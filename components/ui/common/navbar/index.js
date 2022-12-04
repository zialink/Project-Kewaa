import { useWeb3 } from "@components/providers";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/hooks/web3/useAccount";
import { useRouter } from "next/router";

export default function Navbar() {
  const { connect, requireInstall, isLoading } = useWeb3();
  const { account } = useAccount();
  const { pathname } = useRouter();
  return (
    <section>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex gap-2">
                {" "}
                <Image
                  src="/images/logo.jpeg"
                  alt="logo_picture"
                  height="50"
                  width="50"
                  className="rounded-full"
                />
                <h2 className="Pacifico text-xl mt-2">Kewaa</h2>
              </div>
            </div>
            <div>
              <Link href={"/"}>
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href={"/marketplace"}>
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href={"/"}>
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </Link>
              {isLoading ? (
                <Button disabled={true}>Loading...</Button>
              ) : account.data ? (
                <span>connected</span>
              ) : requireInstall ? (
                <Button
                  onClick={() =>
                    window.open("https://metamask.io/download", "_blank")
                  }
                >
                  Install Metamask
                </Button>
              ) : (
                <Button onClick={connect}>Connect</Button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
