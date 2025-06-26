# Rollup DTS Plugin Issue Demo

The repo demonstrates an issue with the rollup-dts-plugin, where `declare module` statement with relative paths are not correctly handled.

To test, run `npm i && npx tsc -D input/index.ts && npx rollup -p rollup-plugin-dts -i input/index.d.ts -f es`. The output will be:

```typescript
interface Config {
  setting: string;
}

declare module "../config" {
  interface Config {
    feat: {
      featSetting: number;
    }
  }
}
```

The `declare module` statement is copied verbatim from `input/feat/config.d.ts` although the path is now incorrect in the resulting, rolled-up file. To make this work, the `declare module` statement should either be stripped (and its contents copied to the output), or the module renamed to `'./index'`, or more specificaly: the name of the output file. The result would look like:

```typescript
interface Config {
  setting: string;
}

interface Config {
  feat: {
    featSetting: number;
  }
}
```

or:

```typescript
interface Config {
  setting: string;
}

declare module "./index" {
  interface Config {
    feat: {
      featSetting: number;
    }
  }
}
```
