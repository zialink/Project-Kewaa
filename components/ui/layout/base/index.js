import { Web3Provider } from "@components/providers";
import { Navbar, Footer } from "@components/ui/common";

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <div className="mx-0 max-w-7xl px-0">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  );
}
