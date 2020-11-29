import { DARK_MODE_MEDIA_QUERY } from "constant"
import { lightTheme, darkTheme } from "styles/theme"
import type { Theme } from "styles/theme"

const isDarkMode = (): boolean =>
  window.matchMedia(DARK_MODE_MEDIA_QUERY).matches

const getTheme = (): Theme => {
  const theme = isDarkMode() ? darkTheme : lightTheme

  return theme
}

export default getTheme
