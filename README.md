![test](https://github.com/hide1982/chrome-extension-oxford-dictionary/workflows/test/badge.svg)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
# Chrome Extension Popup Oxford Dictionary

## 概要
Oxford dictionaries API を使用したポップアップ英英辞書です。  
単語を選択状態にすると、辞書がポップアップで表示されます。  

![app-screenshot](/images/app-screenshot.png/)

## 使用した技術
- Typescript
- React
- Redux
- Redux Toolkit
- styled components
- webpack
- Bit.devを使用したコンポーネント
  - [Github - bit-react-components](https://github.com/hide1982/bit-react-components)
  - [bit.dev - react-components](https://bit.dev/hide1982/react-components)

## 使い方
### 1. Oxford Dictionaries API の API key を取得
下記のURLで登録後、数日でアカウントが発行されます。  
https://developer.oxforddictionaries.com

`sample.config.ts`を`config.ts`に変更して、発行された`App ID`と`App Key`を登録します。
```typescript
export const OXFORD_DICTIONARY_API_BASE_URL =
  "https://od-api.oxforddictionaries.com/api/v2"
export const OXFORD_DICTIONARY_APP_ID = "APP ID" // ← App ID
export const OXFORD_DICTIONARY_APP_KEY = "APP KEY" // ← App Key
```

### 2. Chrome拡張機能を登録
拡張機能をビルドします。
```
yarn install
yarn build
```
生成された`build`ディレクトリを、拡張機能のデベロッパーモードを有効にして、  
「パケージ化されていない拡張機能を読み込む」で読み込みます。  

### 3. 英単語を調べる
英単語を選択状態にすると、辞書ポップアップが表示されます。  
ポップアップの検索フォームに直接入力して調べることも可能です。
