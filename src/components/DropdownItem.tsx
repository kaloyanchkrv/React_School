import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Group, Text } from "@mantine/core";
import { FC } from "react";

interface Props {
  title: string;
}

const DropdownItem: FC<Props> = ({ title }) => {
  return (
    <Group>
      <Text>{title}</Text>
      <ChevronDownIcon width={10} height={20} />
    </Group>
  );
};

export default DropdownItem;
