import type { Configuration } from "webpack";

declare namespace webpackTypes {
  interface CliConfigOptions {
    config?: string;
    mode?: Configuration["mode"];
    env?: string;
    "config-register"?: string;
    configRegister?: string;
    "config-name"?: string;
    configName?: string;
  }

  type ConfigurationFactory = (
    env: string | Record<string, boolean | number | string> | undefined,
    args: CliConfigOptions
  ) => Configuration | Promise<Configuration>;
}
