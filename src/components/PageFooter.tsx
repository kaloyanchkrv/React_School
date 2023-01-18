import { Grid, Stack, Text } from "@mantine/core";
import { FC } from "react";

const PageFooter: FC = () => {
  return (
    <Grid sx={{ backgroundColor: "black", color: "white" }}>
      <Grid.Col span={4}>
        <Stack>
          <Text fz={26} fw={700}>
            Shopping with Us
          </Text>
          <Text fz={19}>Delivery and Returns</Text>
          <Text fz={19}>Wallpaper Sample Service</Text>
          <Text fz={19}>Privacy Policy</Text>
          <Text fz={19}>Site Map</Text>
          <Text fz={19}>Terms & Conditions</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack>
          <Text fw={700} fz={26}>
            Wallpaper Guides
          </Text>
          <Text fz={19}>Wallpaper FAQs</Text>
          <Text fz={19}>Wallpaper Guide</Text>
          <Text fz={19}>How to Hang Wallpaper</Text>
          <Text fz={19}>How to Remove Wallpaper</Text>
          <Text fz={19}>How to Hang a Wall Mural</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack>
          <Text fz={26} fw={700}>
            Visit Us
          </Text>
          <Text fz={19}>Outlet Stores</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default PageFooter;
