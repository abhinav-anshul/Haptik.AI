import Image from "next/Image";
import HaptikLogo from "../public/haptik-logo.png";

function Header() {
  return (
    <>
      <div>
        <Image src={HaptikLogo} alt='haptik logo' width='130px' height='59px' />
      </div>
    </>
  );
}

export default Header;
