import Link from "next/link";

const NavItem = () =>
    <nav className="navigation">
        <Link href="/contact">
            Services
        </Link>

        <Link href="/about">
            About Us
        </Link>

        <Link href="/contact">
            Case Study
        </Link>

        <Link href="/team">
            Team
        </Link>

        <Link href="/contact">
            Career
        </Link>

        <Link href="/contact">
            Contact
        </Link>
    </nav>;

export default NavItem;