import { ButtonStylesParams, CSSObject, MantineTheme, MantineThemeOverride } from "@mantine/core";

export const themeBase: MantineThemeOverride = {
  colors: {
    maingreen: ["#7FC6AC", "#066A76", "#7fc6ac"],
    mainpink: ["#EBE3E9"],
    mainblack: ["#161615"],
  },
  radius: {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
  },
  primaryColor: "maingreen",
  fontFamily: "'DMSerifDisplay', serif",
  headings: {
    fontFamily: " 'DMSerifDisplay', serif",
    fontWeight: 600,
    sizes: {
      h1: {
        fontSize: 56,
      },
      h2: {
        fontSize: 48,
      },
      h3: {
        fontSize: 40,
      },
      h4: {
        fontSize: 32,
      },
      h5: {
        fontSize: 24,
      },
      h6: {
        fontSize: 20,
      },
    },
  },
  spacing: {
    xs: 6,
    sm: 8,
    md: 20,
    lg: 40,
    xl: 50,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  other: {
    fontWeight: {
      regular: 400,
      bold: 600,
    },
    spacing: {
      md: 24,
      lg: 34,
    },
    letterSpacing: "3px",
    fullRadius: 100,
  },
};

export type ThemeGetter<T = undefined> = (theme: MantineTheme, params: T) => Record<string, CSSObject>;

export const appShellStyles: ThemeGetter = () => ({
  main: {
    backgroundColor: "white",
    // padding: "0px !important",
    paddingBottom: "0px !important",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
});

// export const imageStyles: ThemeGetter = () => ({
//   root: {
//     display: "flex",
//     width: "unset !important",
//   },

//   imageWrapper: {
//     maxWidth: 40,
//     maxHeight: 40,
//   },
// });

export const avatarStyles: ThemeGetter = () => ({
  placeholder: {
    backgroundColor: "transparent",
  },
});

export const drawerStyles: ThemeGetter = (theme) => ({
  drawer: {
    backgroundColor: theme.colors.maingreen[2],
  },
  title: {
    color: "white",
  },
});

export const textInputStyles: ThemeGetter = (theme) => ({
  input: {
    border: `2px solid ${theme.colors.maingreen[0]}`,
    color: "black",
    borderRadius: 90,
    height: 40,
    gap: theme.spacing.sm,
    fontSize: theme.fontSizes.md,
  },

  label: {
    display: "flex",
    fontSize: theme.fontSizes.xs,
    fontWeight: theme.other.fontWeight.bold,
    gap: 7,
  },
});

export const buttonStyles = (theme: MantineTheme, params: ButtonStylesParams): Record<string, CSSObject> => ({
  root: {
    height: 40,
    borderRadius: `${theme.other.fullRadius}px !important`,
    color: "white",
  },
});

export const anchorStyles: ThemeGetter = (theme) => ({
  root: {
    fontSize: theme.fontSizes.sm,
  },
});

export const tabsStyles: ThemeGetter = (theme) => ({
  root: {
    width: "100%",
  },

  panel: {
    paddingTop: "0px !important",
  },

  tab: {
    fontWeight: theme.other.fontWeight.regular,
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&[data-active]": {
      fontWeight: theme.other.fontWeight.bold,
    },
  },
});

export const gridStyles: ThemeGetter = () => ({
  root: {
    margin: 0,
  },
});
