// History.jsで使用するプロフィールデータ
import React from 'react';
import ComponentSnsTile, { style } from '../Profile/ComponentSnsTile';
import { BrushOutlined, ConstructionOutlined, FavoriteBorderOutlined, FitnessCenterOutlined, FlagOutlined, GitHub, LanguageOutlined, LocalPolice, LocalPoliceOutlined, PaletteOutlined, SchoolOutlined, ScienceOutlined, StarBorderOutlined, VerifiedOutlined, X } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';


// -------------------------------------------- 画像 --------------------------------------------
import { ThumbnailChallenge, Sushiwari, ShinagawaRunners, OfficeDxApp, BeReehearsal, Okiben } from './thumbnail_images';
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
                url: 'https://drive.google.com/file/d/1eNNoBpYQfrtQpOL7fFGEI37SjNs3VcMe/view?usp=drive_link',
                icon: "file",
                title: "アイデア資料"
            }
        ]
    },
    {
        title: "スシワリ",
        subtitle: "Hack U | 2人",
        year: "2024",
        month: "1",
        kind: "app",
        image: Sushiwari,
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
                icon: "file",
                title: "HackU紹介ページ"
            },
            {
                icon: "youtube",
                title: "HackU発表時の映像"
            },
            {
                icon: "github",
                title: "GitHubリポジトリ"
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
            "Hack U 都立産技高専 2023 参加",
            "回転寿司店での割り勘に特化したアプリ"
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
                icon: "file",
                title: "HackU紹介ページ"
            },
            {
                icon: "youtube",
                title: "HackU発表時の映像"
            },
            {
                icon: "github",
                title: "GitHubリポジトリ"
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
    },
    {
        title: "chaen",
        subtitle: "さいたまICTコンテスト | 4人",
        year: "2024",
        month: "5",
        kind: "app",
        isNotCodeAllowed: true
    },
    {
        title: "BeRehearsal.",
        subtitle: "個人",
        image: BeReehearsal,
        kind: "app",
        year: "2024",
        month: "6",
        isDateStart: true,
    },
    {
        title: "okiben",
        subtitle: "個人",
        image: Okiben,
        kind: "app",
        year: "2024",
        month: "7",
    },
    {
        title: "年賀状かるた",
        subtitle: "Hack U | 4人",
        year: "2024",
        month: "12",
        kind: "app",
        isNotCodeAllowed: true
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
        detailTiles: [
            {
                title: "仮称",
                content: "creeasy"
            }
        ]
    },
    {
        title: "マッチングアプリ\n支援アプリ",
        subtitle: "個人 | 実装未開始",
        kind: "idea-phase",
        isDateStart: true,
    },
    {
        title: "学生支援アプリ",
        subtitle: "個人 | 実装未開始",
        kind: "idea-phase",
        isDateStart: true,
    },
];