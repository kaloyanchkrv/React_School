import { Group, Text, Image, Center, Menu } from "@mantine/core";
import { FC } from "react";
import DropdownItem from "./DropdownItem";
import shop from "../assets/test.png";
import ClienOptions from "./ClienOptions";
import GridSystem from "./GridSystem";
import midimage from "../assets/takethepath.png";
import next from "../assets/next.png";
import PageFooter from "./PageFooter";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const MainPage: FC = () => {
  return (
    <main>
      <section>
        <Group position="apart" p={20} style={{ borderBottom: "3px solid #7ec5ab" }}>
          <DropdownItem title="WALLPAPER" />
          <DropdownItem title="PAINT" />
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <Group>
                <Text>BRANDS</Text>
                <ChevronDownIcon width={10} height={20} />
              </Group>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Envy</Menu.Item>
              <Menu.Item>Joules</Menu.Item>
              <Menu.Item>Laura Ashley</Menu.Item>
              <Menu.Item>Next</Menu.Item>
              <Menu.Item>Superfresco Easy Paint</Menu.Item>
              <Menu.Item>Superfresco Easy</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <DropdownItem title="WALL MURALS" />
          <DropdownItem title="WALL ART" />
          <DropdownItem title="SALE" />
        </Group>
        <Group position="apart" p={30}>
          <ClienOptions text="Free Delivery On All Orders Over £50" />
          <ClienOptions text="Customers Rate Us 4.7 / 5" />
          <ClienOptions text="Order by 8pm For Next Day Delivery" />
        </Group>
      </section>
      <section>
        <Group>
          <Image radius="md" src={shop} alt="Random unsplash image" />
        </Group>
      </section>
      <GridSystem />
      <article>
        <Center pt={30} sx={{ display: "flex", flexDirection: "column" }}>
          <Text fz={36} fw={700}>
            Welcome to Wallpaper it
          </Text>
          <Text pt={40} fz={20} align="center">
            Designed in our studio, our fun, bright and affordable wallpapers are an <br /> easy and stress-free way to
            transform your house into a home. Too <br /> good to be true?
          </Text>
          <Text pt={30} fz={20} align="center">
            Have a little scroll and see for yourself…
          </Text>
          <Image
            pt={20}
            width={60}
            height={60}
            src="https://www.wallpaper-it.com/on/demandware.static/-/Library-Sites-Library-Wallpaper/default/dwf3a96048/wallpaperit/images/wi-fav.png"
          />
          <Image pt={30} src={midimage} />
          <Image pt={30} src={next} />
        </Center>
      </article>
      <footer>
        <PageFooter />
      </footer>
    </main>
  );
};

export default MainPage;
