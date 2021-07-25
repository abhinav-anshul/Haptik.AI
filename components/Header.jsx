import React from "react";
import Image from "next/Image";

function Header() {
  return (
    <>
      <div>
        <Image
          src='/haptik-logo.png'
          alt='haptik-logo'
          width='150px'
          height='79px'
        />
      </div>
    </>
  );
}

export default Header;
