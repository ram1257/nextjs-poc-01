import Link from "next/link";
import React from "react";

function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <h2>Check to see if your in the correct page</h2>
      <Link href="/">Click here to go home</Link>
    </div>
  );
}

export default PageNotFound;
