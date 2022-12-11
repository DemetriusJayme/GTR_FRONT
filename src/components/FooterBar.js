import { Link } from "react-router-dom";

function FooterBar() {
  return (
    <>
      <div
        className={`fixed bottom-0 right-0 z-20 p-2 w-full bg-gray-800 
items-center flex justify-center text-sm text-white text-center`}
      >
        <Link
          to="https://github.com/stroligo/GTR_FRONT"
          className="hover:text-orange"
        >
          © 2022 - GTR™ All Rights Reserved.
        </Link>
      </div>
    </>
  );
}

export default FooterBar;
