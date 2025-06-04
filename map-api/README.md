 # Map API プロジェット

MapboxとGoogle Maps APIを使用した地図アプリケーションです。

## セットアップ

### 1. APIキーの設定

このプロジェクトではAPIキーを安全に管理するために、設定ファイルを使用します。

1. `js/config.js` ファイルを開いて、実際のAPIキーを入力します

```javascript
const API_CONFIG = {
    MAPBOX_API_KEY: 'あなたのMapboxAPIキー',
    GOOGLE_MAPS_API_KEY: 'あなたのGoogleMapsAPIキー'
};
```

### 2. APIキーの取得

- **Mapbox API キー**: [Mapbox](https://www.mapbox.com/)でアカウントを作成してアクセストークンを取得
- **Google Maps API キー**: [Google Cloud Console](https://console.cloud.google.com/)でAPIキーを作成（Places APIとMaps JavaScript APIを有効化）

### 3. 注意事項

- `js/config.js` ファイルは `.gitignore` に含まれているため、GitHubにアップロードされません
- 他の開発者と共有する場合は、`js/confi.js` ファイルを参考にして設定してもらってください

## 使用方法

1. ブラウザで `index.html` を開きます
2. 検索ボックスに場所を入力して「Search Hotels」ボタンをクリック
3. 指定した場所周辺のホテルが地図上にマーカーで表示されます

## ファイル構成

```
map-api/
├── index.html          # メインのHTMLファイル
├── js/
│   ├── scripts.js      # メインのJavaScriptファイル
│   ├── config.js       # APIキー設定ファイル（Git管理外）
│   
├── css/
│   └── styles.css      # スタイルシート
├── .gitignore          # Git除外ファイルリスト
└── README.md           # このファイル
```