import Link from "@/components/ui/link";
import Container from "../common/container";
import Breadcrumbs from "./breadcrumbs";

const NavBar = () => {
  return (
    <header className="w-full h-14 print:hidden z-10">
      <div className="fixed w-full backdrop-blur-xl dark:backdrop-blur-md">
        <Container className="flex items-center justify-between space-x-3">
          <div className="flex flex-1">
            <div>
              <Link href="/" className="font-medium">
                <span className="text-gray-500 dark:text-gray-400">mx</span>
                kaske
              </Link>
            </div>
            <Breadcrumbs />
          </div>
          <div className="flex items-center flex-shrink-0">{/* content */}</div>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;
