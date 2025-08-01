type NavLink = {
  href: string;
  label: string;
};
export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/products", label: "products" },
  { href: "/favorites", label: "favorites" },
  { href: "/reviews", label: "reviews" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
  { href: "/profile", label: "profile" },
  { href: "/dashbord", label: "dashbord" },
];
export const DashbordLink: NavLink[] = [
  { href: "dashbord/products", label: "products" },
  { href: "dashbord/orders", label: "orders" },
  { href: "dashbord/users", label: "users" },
];
