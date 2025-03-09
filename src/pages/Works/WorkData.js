// History.jsで使用するプロフィールデータ
import React from 'react';
import ComponentSnsTile, { style } from '../Profile/ComponentSnsTile';
import { BrushOutlined, ConstructionOutlined, FavoriteBorderOutlined, FitnessCenterOutlined, FlagOutlined, GitHub, LanguageOutlined, LocalPolice, LocalPoliceOutlined, PaletteOutlined, SchoolOutlined, ScienceOutlined, StarBorderOutlined, VerifiedOutlined, X } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';


// -------------------------------------------- 画像 --------------------------------------------
import { ThumbnailChallenge, Sushiwari, ShinagawaRunners, OfficeDxApp, BeReehearsal, Okiben } from './thumbnail_images';
import { icon } from '@fortawesome/fontawesome-svg-core';
// ---------------------------------------------------------------------------------------------



/*
各マップ要素の形式:
{
}
*/


// 完成物データ
export const workData = [
    {
        title: "挑戦応援アプリ",
        subtitle: "アプリ甲子園 | 個人",
        image: ThumbnailChallenge,
        year: "2023",
        month: "7",
        kind: "idea",
        detailTitle: [
            "挑戦応援アプリを考案",
            "アイデアをアプリ甲子園へ応募"
        ],
        detailTiles: [
            {
                title: "参加人数",
                content: "個人"
            }
        ],
        detailLinks: [
            {
                icon: "file",
                title: "アイデア資料",
                url: 'https://drive.google.com/file/d/1eNNoBpYQfrtQpOL7fFGEI37SjNs3VcMe/view?usp=drive_link'
            }
        ]
    },
    {
        title: "スシワリ",
        subtitle: "Hack U 都立産技高専 2023 | 2人",
        year: "2024",
        month: "1",
        kind: "app",
        image: Sushiwari,
        detailTitle: [
            "回転寿司店での割り勘に特化したアプリ",
            "Flutterで初めてのアプリ開発"
        ],
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutter"
            },
            {
                title: "担当",
                content: "グループ/お店管理ページ, 発表資料作成, 発表"
            },
            {
                title: "経験",
                content: "発表時にスライドが自動再生されてしまうアクシデント"
            }
        ],
        detailLinks: [
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
        title: "品川ランナーズ",
        subtitle: "品川ビジネスコンテスト(区民の部) | 3人",
        image: ShinagawaRunners,
        year: "2024",
        month: "2",
        kind: "idea",
        detailTitle: [
            "旧東海道をランニングコースとして活用するアイデア"
        ],
        detailTiles: [
            {
                title: "担当",
                content: "アイデア深める, 応募資料作成"
            }
        ],
        detailLinks: [
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
        title: "事務DXアプリ",
        subtitle: "5人",
        image: OfficeDxApp,
        year: "2024",
        month: "4",
        kind: "app",
        isDateStart: true,
        detailTitle: [
            "本校事務室の方にヒアリングを実施",
            "ヒアリングで伺った課題を解決するアプリ"
        ],
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutter, Firebase"
            },
            {
                title: "担当",
                content: "Firebase処理, 管理者画面, チャット画面"
            }
        ],
        detailLinks: [
            {
                icon: "file",
                title: "概要紹介資料",
                subtitle: "(開発途中の8月時点)",
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
                url: "https://github.com/laughtaone/OfficeDX-demo"
            },
            {
                icon: "url",
                title: "デモページ",
                subtitle: "(表示までに時間がかかる場合あり)",
                url: "https://office-dx-ad8a3.web.app/",
                isSubtitleColumn: true
            }
        ]
    },
    {
        title: "chaen",
        subtitle: "さいたまICTコンテスト | 4人",
        year: "2024",
        month: "5",
        kind: "app",
        isNotCodeAllowed: true,
        detailTitle: [
            "word2vecを用いた英単語学習アプリ",
            "英単語同士を＋–して目標の英単語を目指すゲーム型学習アプリ",
        ],
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutter"
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
        detailLinks: [
            {
                icon: "url",
                title: "さいたまICTコンテストとは",
                url: "https://www.sisia.or.jp/hpc/"
            }
        ]
    },
    {
        title: "BeRehearsal.",
        subtitle: "個人",
        image: BeReehearsal,
        kind: "app",
        year: "2024",
        month: "6",
        isDateStart: true,
        detailTitle: [
            "BeReal.の撮影リハーサルができるアプリ",
            "iOS版はAppStoreに公開中",
            "(Androidは今後対応予定)"
        ],
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutter"
            },
            {
                title: "担当",
                content: "全て(個人開発)"
            }
        ],
        detailLinks: [
            {
                icon: "appstore",
                title: "AppStoreリンク",
                url: "https://apps.apple.com/jp/app/berehearsal/id6742497007"
            },
            {
                icon: "github",
                title: "GitHubリポジトリ",
                url: "https://github.com/laughtaone/bere"
            },
            {
                icon: "url",
                title: "公開ページ",
                url: "https://laughtaone.notion.site/BeRehearsal-1a6b5b939081808c8fc8dac8877eef7c?pvs=4",
            }
        ]
    },
    {
        title: "okiben",
        subtitle: "個人",
        image: Okiben,
        kind: "app",
        year: "2024",
        month: "7",
        detailTitle: "置き勉した教材を管理するアプリ",
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutter"
            },
            {
                title: "担当",
                content: "全て(個人開発)"
            }
        ],
        detailLinks: [
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
            ,
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
        title: "年賀状かるた",
        subtitle: "Hack U KOSEN 2024 | 4人",
        year: "2024",
        month: "12",
        kind: "app",
        isNotCodeAllowed: true,
        detailTitle: [
            "年賀状をかるたにして楽しむアプリ",
            "GPT APIを用いて年賀状を生成"
        ],
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutter"
            },
            {
                title: "担当",
                content: "UIアイデア設計, UIや画面遷移などフロントエンド部分"
            }
        ],
        detailLinks: [
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
    }
];


// 制作中or予定データ
export const workPlanData = [
    {
        title: "クレジットカード\n支払管理アプリ",
        subtitle: "個人",
        year: "2024",
        month: "8",
        kind: "app-undone",
        isDateStart: true,
        detailTitle: "クレジットカードの支払いに加え、従来のアプリでは管理できない項目も管理可能なアプリ",
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutter"
            },
            {
                title: "担当",
                content: "全て(個人開発)"
            },
            {
                title: "仮称",
                content: "creeasy"
            },
            {
                title: "進捗",
                content: "UIまで実装済み・hiveを用いたバックエンド処理未着手"
            }
        ],
        detailLinks: [
            {
                icon: "url",
                title: "アプリデモ動画",
                isPreparing: true
            },
            {
                icon: "url",
                title: "アプリ各画面スクショ",
                isPreparing: true
            },
            {
                icon: "github",
                title: "GitHubリポジトリ",
                isPreparing: true
            }
        ]
    },
    {
        title: "学生支援アプリ",
        subtitle: "個人 | 実装未開始",
        kind: "idea-phase",
        isDateStart: true,
        detailTitle: [
            "学生の青春を支えるアプリ",
            "学生生活中にあったら便利な機能をメモしており、開発を検討中"
        ],
        detailTiles: [
            {
                title: "開発手法",
                content: "Flutterを検討中"
            },
            {
                title: "担当",
                content: "全て(個人開発)"
            }
        ],
    },
    {
        title: "マッチングアプリ\n課題解決アプリ",
        subtitle: "個人 | 実装未開始",
        kind: "idea-phase",
        isDateStart: true,
        detailTitle: "若者に人気のマッチングアプリに存在する課題を解決するアプリ",
        detailTiles: [
            {
                title: "開発手法",
                content: "Swiftを検討中"
            },
            {
                title: "担当",
                content: "全て(個人開発)"
            }
        ],
    },
];