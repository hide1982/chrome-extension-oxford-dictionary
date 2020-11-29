import "styled-components"
import { Theme } from "styles/Theme"

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
