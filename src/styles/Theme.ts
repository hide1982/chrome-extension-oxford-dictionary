export interface Theme {
  backgroundColor: string
  icon: {
    color: string
    backgroundColor: string
    backgroundColorHover: string
  }
}

export const lightTheme: Theme = {
  backgroundColor: "#fafafa",
  icon: {
    color: "#000",
    backgroundColor: "#fafafa",
    backgroundColorHover: "#c7c7c7",
  },
}

export const darkTheme: Theme = {
  backgroundColor: "#212121",
  icon: {
    color: "#fff",
    backgroundColorHover: "#484848",
    backgroundColor: "#212121",
  },
}
