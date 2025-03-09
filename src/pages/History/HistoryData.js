// History.jsで使用するプロフィールデータ
import React from 'react';
import ComponentSnsTile, { style } from '../Profile/ComponentSnsTile';
import { BrushOutlined, ConstructionOutlined, FavoriteBorderOutlined, FitnessCenterOutlined, FlagOutlined, GitHub, LanguageOutlined, LocalPolice, LocalPoliceOutlined, PaletteOutlined, SchoolOutlined, ScienceOutlined, StarBorderOutlined, VerifiedOutlined, X } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';



/*
各マップ要素の形式:
{
    year: "年（必須）",
    month: "月（必須）",
    title: "タイトル（必須）",
    subtitle: "サブタイトル（任意・タイトルの右に小さく表示）",
    details: [
        {
            title: "詳細タイトル",
            content: "詳細内容"
        }
    ],
    links: [
        {
            icon: <アイコン>,
            title: "リンクタイトル",
            url: "リンクURL"
        }
    ]
}
*/


const historyData = [
    {
        year: "2021",
        month: "4",
        title: "東京都立産業技術高等専門学校 品川キャンパス 入学",
    },
    {
        year: "2022",
        month: "1",
        title: "Python 学習開始",
    },
    {
        year: "2023",
        month: "7",
        title: "アプリ甲子園 アイデア部門 応募",
        subtitle: "挑戦応援アプリを考案し応募",
        details: [
            {
                title: "参加人数",
                content: "個人",
            }
        ],
        links: [
            {
                icon: "file",
                title: "アイデア資料",
                url: "https://drive.google.com/file/d/1eNNoBpYQfrtQpOL7fFGEI37SjNs3VcMe/view?usp=drive_link"
            }
        ]
    },
    {
        year: "2023",
        month: "9",
        title: "Flutter 学習開始",
    },
    {
        year: "2024",
        month: "1",
        title: "Hack U 都立産技高専 2023 参加",
        subtitle: "回転寿司店に特化した割り勘アプリ「スシワリ」を開発",
        details: [
            {
                title: "開発手法",
                content: "Flutter",
            },
            {
                title: "担当",
                content: "グループ/お店管理ページ, 発表資料作成, 発表",
            },
            {
                title: "経験",
                content: "発表時にスライドが自動再生されてしまうアクシデント",
            }
        ],
        links: [
            {
                icon: "url",
                title: "HackU 該当開催ページ",
                url: "https://hacku.yahoo.co.jp/cit2023/"
            },
            {
                icon: "youtube",
                title: "私が担当した発表時の映像",
                url: "https://youtu.be/6QKCmR5b67k?si=B4RZ-grU5XyHZd_l&t=1129"
            },
            {
                icon: "github",
                title: "GitHubリポジトリ",
                isPreparing: true
            }
        ]
    },
    {
        year: "2024",
        month: "2",
        title: "品川ビジネスコンテスト(区民の部)　優秀賞受賞",
        subtitle: "風情ある旧東海道の品川区内部分をランニングコースとして活用するアイデアを応募",
        details: [
            {
                title: "参加人数",
                content: "3人",
            },
            {
                title: "結果",
                content: "第2位にあたる優秀賞を受賞",
            }
        ],
        links: [
            {
                icon: "file",
                title: "アイデア資料",
                url: "https://drive.google.com/file/d/1ZqPzamUihgW-Phz0wLCiseVvOyL9qYwf/view?usp=sharing"
            },
            {
                icon: "url",
                title: "受賞紹介ページ",
                url: "https://www.metro-cit.ac.jp/page_00810.html"
            }
        ]
    },
    {
        year: "2024",
        month: "4",
        title: "本校事務室 一部の事務作業DXアプリ 開発開始",
        subtitle: "本校事務室の職員の方にヒアリングを実施することで見つけた一部の事務作業をDXするアプリ",
        details: [
            {
                title: "参加人数",
                content: "5人",
            },
            {
                title: "開発手法",
                content: "Flutter, Firebase(Storage/Cloud Firestore/Authentication)",
            },
            {
                title: "UIアイデア作成",
                content: "Figma, PowerPoint",
            }
        ],
        links: [
            {
                icon: "file",
                title: "概要紹介資料",
                subtitle: "(開発途中の8月時点での資料)",
                url: "https://drive.google.com/file/d/1IRm9Dk-254WiM78np4HR5sS0csNxIbjL/view?usp=sharing"
            },
            {
                icon: "file",
                title: "Firebase構造資料",
                url: "https://drive.google.com/file/d/1ZJlKbuDSyCdn_6vSUWkrTblQaUBu2ASP/view?usp=sharing"
            },
            {
                icon: "github",
                title: "GitHubリポジトリ",
                subtitle: "(デモ用)",
                url: "https://github.com/laughtaone/OfficeDX-demo",
            },
            {
                icon: "url",
                title: "デモページ",
                subtitle: "(アクセスから表示までに時間がかかる場合あり)",
                url: "https://office-dx-ad8a3.web.app/"
            }
        ]
    },
    {
        year: "2024",
        month: "5",
        title: "さいたまICTコンテスト2024 応募",
        subtitle: "Word2Vecというモデル群を活用した英単語学習アプリ「chaen」を開発し応募",
        details: [
            {
                title: "参加人数",
                content: "4人",
            },
            {
                title: "開発手法",
                content: "Flutter",
            },
            {
                title: "UIアイデア作成",
                content: "Figma",
            },
            {
                title: "担当",
                content: "UIアイデア作成, フロントエンド全般"
            }
        ],
        links: [
            {
                icon: "url",
                title: "さいたまICTコンテストとは",
                url: "https://www.sisia.or.jp/hpc/"
            }
        ]
    },
    {
        year: "2024",
        month: "6",
        title: "BeReal. リハーサル撮影アプリ「BeRehearsal.」開発開始",
        subtitle: "BeReal.の撮影をリハーサルできるアプリ",
        details: [
            {
                title: "開発人数",
                content: "個人",
            },
            {
                title: "開発手法",
                content: "Flutter",
            }
        ],
        links: [
            {
                icon: "appstore",
                title: "AppStoreリンク",
                url: "https://apps.apple.com/jp/app/berehearsal/id6742497007"
            },
            {
                icon: "github",
                title: "GitHubリポジトリ",
                url: "https://github.com/laughtaone/bere",
            },
            {
                icon: "url",
                title: "公開ページ",
                url: "https://laughtaone.notion.site/BeRehearsal-1a6b5b939081808c8fc8dac8877eef7c?pvs=4",
            }
        ]
    },
    {
        year: "2024",
        month: "7",
        title: "置き勉管理アプリ「okiben」開発",
        subtitle: "置き勉の有無を教材ごとにスイッチのオン/オフで簡単に管理できるアプリ",
        details: [
            {
                title: "開発人数",
                content: "個人",
            },
            {
                title: "開発手法",
                content: "Flutter",
            }
        ],
        links: [
            {
                icon: "file",
                title: "レポート資料",
                url: "https://drive.google.com/file/d/1GNJnzMK8vGjVepiX3-yNJx9HTRlTE8Z_/view?usp=sharing"
            },
            {
                icon: "github",
                title: "GitHubリポジトリ",
                url: "https://github.com/laughtaone/okiben"
            },
            {
                icon: "appstore",
                title: "AppStoreリンク",
                url: "",
                isPreparing: true,
                customPreparingMessage: "審査中"
            }
        ]
    },
    {
        year: "2024",
        month: "8-9",
        title: "インターンシップ参加",
        subtitle: "10日間 Reactを用いた開発体験, 0.5日間 グループディスカッション, 0.5日間 IT業界研究セミナー の計3社・11日間 参加"
    },
    {
        year: "2024",
        month: "12",
        title: "Hack U KOSEN 2024 参加",
        subtitle: [
            "「お正月をHackせよ」というテーマに対し、撮影した年賀状データからAIで俳句を作成し、カルタとして遊ぶアプリを開発",
            "画像データをBase64にエンコードしGPT APIでAIに投げ俳句を生成"
        ],
        details: [
            {
                title: "開発人数",
                content: "4人",
            },
            {
                title: "開発手法",
                content: "Flutter, GPT API",
            },
            {
                title: "担当",
                content: "UIアイデア設計, UIや画面遷移などフロントエンド部分"
            }
        ],
        links: [
            {
                icon: "file",
                title: "アプリ紹介資料",
                isPreparing: true
            },
            {
                icon: "url",
                title: "HackU 該当開催ページ",
                url: "https://hacku.yahoo.co.jp/kosen2024/"
            },
            {
                icon: "youtube",
                title: "他メンバーによる発表時の映像",
                url: "https://youtu.be/cjHVZzAWpZ0?si=2tIjCM_vcuOvqi_Q&t=1848"
            }
        ]
    },
    {
        year: "2025",
        month: "1",
        title: "Swift 学習開始",
        subtitle: "試験・卒研・検定受験・就職活動準備などで忙しいが、少しずつ学習中"
    }
];



export default historyData;