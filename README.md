# 🍃 Reactを用いたポートフォリオサイト

## 概要

このプロジェクトは、**React** を用いて開発したポートフォリオサイトです。
**自己紹介**や**来歴**、**制作物**、**お問合せ先**などの紹介を備えています。

## 🛠 使用技術・サービス

-   **React**
-   **AWS** (公開に使用 | EC2, Route53など)

## 📂 ディレクトリ構成
ディレクトリ構成は、次のようになっています。
なおこちらは、commit 6dd624ec9b7fd36605ae8a8da94ec2625f2ee5fb 時点での構成のため、最新のコミットとは異なる構成の場合があります。
```
react_portfolio
├── README.md              # ドキュメント (このファイル)
├── package.json           # npm スクリプト & 依存関係
├── public/                # 静的ファイル
│   ├── index.html         # ルートHTML
│   ├── logo512.png
│   └── (その他4ファイル)
├── src/                   # ソースコード
│   ├── assets/            # 画像やその他の静的リソース
│   │   └── images/
│   ├── components/        # コンポーネント
│   │   ├── Header/
│   │   │   └── Header.js
│   │   ├── Footer/
│   │   │   └── Footer.js
│   │   ├── Spacer.js
│   │   ├── PageTitle.js
│   │   └── CenteredContainer.js
│   ├── pages/             # 各ページ
│   │   ├── Home/          # ホームページ
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Profile/       # プロフィールページ
│   │   │   ├── Profile.js
│   │   │   ├── ProfileData.js
│   │   │   └── (その他2ファイル)
│   │   ├── Works/         # 制作物ページ
│   │   │   ├── Works.js
│   │   │   ├── WorkData.js
│   │   │   └── (その他1ファイル)
│   │   ├── Contact/       # お問い合わせページ
│   │   │   ├── Contact.js
│   │   │   └── (その他1ファイル)
│   │   └── AboutThisSite/ # サイトについて
│   │       └── AboutThisSite.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── (その他2ファイル)
└── .gitignore
```

## 🧑‍💻 開発手順
詳しい開発手順は、下記のZennリンクに公開しております。
[https://zenn.dev/laughtaone/articles/d102b83b8c0870](https://zenn.dev/laughtaone/articles/d102b83b8c0870)


## ☁️ AWSについて
### 使用サービス
AWSの内、下記サービスを使用して公開しています。

 - VPC
 - EC2
 - Route 53
 - Certificate Manager (ACM)

 ### リージョン
東京リージョン（2つのAZ）を使用しています。

これらの詳しい内容も、先述したZennに公開しております。
[https://zenn.dev/laughtaone/articles/d102b83b8c0870](https://zenn.dev/laughtaone/articles/d102b83b8c0870)


##  🚀 今後の展望
-  ダークモードの実装
-  より優れたUIへの改良

## ポートフォリオサイト
公開したポートフォリオサイトは、下記URLよりご覧いただけます。
[https://thinleaf.net/](https://thinleaf.net/)
