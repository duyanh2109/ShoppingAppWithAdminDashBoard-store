import React from "react";
import Container from "./UI/Container";
import Link from "next/link";
import MainNav from "./Main-nav";
import getCategories from "@/actions/get-categories";
import NavBarAction from "./navbar-action";

export const revalidate = 0;
const NavBar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavBarAction />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
