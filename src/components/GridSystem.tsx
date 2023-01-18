import { Flex, Group, Image } from "@mantine/core";
import { FC } from "react";

import pink from "../assets/pinkimg.png";
import gray from "../assets/gray.png";
import kids from "../assets/kids.png";
import newcollection from "../assets/newcollection.png";
import murals from "../assets/murals.png";
import yellowpink from "../assets/yellowpink.png";
import blue from "../assets/blue.png";
import geometric from "../assets/geometric.png";

const GridSystem: FC = () => {
  return (
    <>
      <Flex justify="center" pt={20} gap={30}>
        <Image width={650} height={600} src={pink} />
        <Group spacing="xl">
          <Image width={300} src={yellowpink} />
          <Image width={300} src={newcollection} />
          <Image height={300} src={murals} />
        </Group>
      </Flex>
      <Group spacing="xl" position="apart" pt={20}>
        <Image width={300} src={geometric} />
        <Image width={300} src={gray} />
        <Image width={300} src={blue} />
        <Image width={300} src={kids} />
      </Group>
    </>
  );
};

export default GridSystem;
