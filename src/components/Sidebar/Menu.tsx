import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface MenuProps {
  data: {
    name: string;
    icon: Function;
    href: string;
  }[];
}

const Menu: FC<MenuProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="mt-8">
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <a
                className={`flex items-center py-3 px-6 ${
                  router.asPath === item.href
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
              >
                {/* <item.icon /> */}
                <p className="font-semibold">{item.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
