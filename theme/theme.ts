import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",

  typography: {
    fontFamily: "var(--font-vazirmatn), sans-serif",

    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },

    body1: {
      fontSize: "14px",
    },

    body2: {
      fontSize: "13px",
    },
  },

  palette: {
    primary: {
      main: "#9333ea",
      light: "#c084fc",
      dark: "#6b21a5",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#6b7280",
    },

    background: {
      default: "#ffffff",
      paper: "#f9fafb",
    },

    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },

    error: {
      main: "#ef4444",
    },

    success: {
      main: "#10b981",
    },

    warning: {
      main: "#f59e0b",
    },

    info: {
      main: "#3b82f6",
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});