export type { Config } from "../config";

declare module "../config" {
  interface Config {
    feat: {
      featSetting: number;
    }
  }
}
