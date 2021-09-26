# eslint-config-react-exhaustive
My ESLint, Prettier, TypeScript configuration for React Apps.

[![npm version](https://badge.fury.io/js/eslint-config-react-exhaustive.svg)](https://badge.fury.io/js/eslint-config-react-exhaustive)

## Peer deps
You need typescript and eslint, if they are not installed already.
```sh
yarn add -D eslint typescript
```
<details>
<summary>Which versions?</summary>
<br>
  eslint: "^7.32.0"
  <br>
  typescript: ">=4"
</details>

## Installation

```sh
yarn add -D eslint-config-react-exhaustive
```

## Usage

In `.eslintrc`:

```json
{ 
  "extends": "react-exhaustive", 
} 
```

In `tsconfig.json`:

```json
{
  "extends": "eslint-config-react-exhaustive/lib/tsconfig.base" 
}
```
