import { Avatar, Stack, Text } from "@mantine/core";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
}

const UserActions: FC<Props> = ({ title, icon }) => {
  return (
    <Stack align="center" spacing={0}>
      <Avatar>{icon}</Avatar>
      <Text>{title}</Text>
    </Stack>
  );
};

export default UserActions;
