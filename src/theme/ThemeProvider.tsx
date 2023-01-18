import { FC, PropsWithChildren } from "react";

import { MantineProvider } from "@mantine/core";

import {
  themeBase,
  anchorStyles,
  buttonStyles,
  gridStyles,
  tabsStyles,
  avatarStyles,
  textInputStyles,
  appShellStyles,
  drawerStyles,
} from "./themeConfig";

const ThemeContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      theme={{
        ...themeBase,
        components: {
          AppShell: { styles: appShellStyles },
          Anchor: { styles: anchorStyles },
          Avatar: { styles: avatarStyles },
          Button: { styles: buttonStyles },
          Grid: { styles: gridStyles },
          TextInput: { styles: textInputStyles },
          Tabs: { styles: tabsStyles },
          Drawer: { styles: drawerStyles },
          Container: {
            defaultProps: {
              sizes: {
                xs: 440,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeContainer;
