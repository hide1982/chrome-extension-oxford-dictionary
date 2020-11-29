export interface Theme {
  backgroundColor: {
    main: string
    focus: string
  }
  fontColor: {
    main: string
  }
  icon: {
    color: { main: string }
    backgroundColor: {
      main: string
      focus: string
    }
  }
  border: {
    main: string
  }
  input: {
    backgroundColor: {
      main: string
      focus: string
    }
  }
}

interface ThemeColor {
  primary: string
  primaryLight: string
  primaryDark: string
  text: string
}

const lightColor: ThemeColor = {
  primary: "#fafafa",
  primaryLight: "#fff",
  primaryDark: "#c7c7c7",
  text: "#000",
}

const darkColor: ThemeColor = {
  primary: "#212121",
  primaryLight: "#484848",
  primaryDark: "#000",
  text: "#fff",
}

export const lightTheme: Theme = {
  backgroundColor: { main: lightColor.primary, focus: lightColor.primaryLight },
  fontColor: { main: lightColor.text },
  icon: {
    color: { main: lightColor.text },
    backgroundColor: {
      main: lightColor.primary,
      focus: lightColor.primaryDark,
    },
  },
  border: {
    main: lightColor.text,
  },
  input: {
    backgroundColor: {
      main: lightColor.primaryDark,
      focus: lightColor.primary,
    },
  },
}

export const darkTheme: Theme = {
  backgroundColor: { main: darkColor.primary, focus: darkColor.primaryLight },
  fontColor: { main: darkColor.text },
  icon: {
    color: { main: darkColor.text },
    backgroundColor: { main: darkColor.primary, focus: darkColor.primaryLight },
  },
  border: {
    main: darkColor.text,
  },
  input: {
    backgroundColor: {
      main: darkColor.primaryLight,
      focus: darkColor.primary,
    },
  },
}
