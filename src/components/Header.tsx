import { FC, useState } from "react";
import { Drawer, Group, Header as MantineHeader, Image, TextInput, Text, Anchor } from "@mantine/core";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import UserActions from "./UserActions";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const Header: FC = () => {
  const [opened, setOpened] = useState(true);
  return (
    <header>
      <MantineHeader
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        height={100}
        p="xs"
      >
        <Drawer
          size={70}
          title-="Helllooo"
          position="top"
          overlayOpacity={0}
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <Anchor sx={{ textAlign: "center" }} fw={700} href="https://www.wallpaper-it.com/wallpaper/view-all/">
            <Text>NEW YEAR SALE! 20% OFF SELECTED WALLPAPERS !</Text>
          </Anchor>
        </Drawer>
        <Image
          radius="md"
          src="https://www.wallpaper-it.com/on/demandware.static/Sites-wallpaper-it-Site/-/default/dw86ffeaf0/images/wallpaperit-Logo.png"
          alt="Random unsplash image"
          width={270}
          height={50}
        />
        <TextInput
          rightSection={<MagnifyingGlassIcon width={20} height={20} />}
          style={{ borderRadius: 120, minWidth: "400px" }}
          placeholder="Search for products..."
        />
        <Group spacing={50}>
          <UserActions icon={<UserCircleIcon width={30} height={30} />} title={"Sign In"} />
          <UserActions icon={<HeartIcon width={30} height={30} />} title={"Wishlist"} />
          <UserActions icon={<ShoppingBagIcon width={30} height={30} />} title={"Bag"} />
        </Group>
      </MantineHeader>
    </header>
  );
};

export default Header;
