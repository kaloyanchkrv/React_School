import { CheckIcon, Group, Text } from "@mantine/core";
import { FC } from "react";

interface Props {
  text: string;
}

const ClienOptions: FC<Props> = ({ text }) => {
  return (
    <Group spacing="xs">
      <CheckIcon color="green" width={10} height={10} />
      <Text>{text}</Text>
    </Group>
  );
};

export default ClienOptions;
