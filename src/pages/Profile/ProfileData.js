// Profile.jsで使用するプロフィールデータ
import React from 'react';
import ComponentSnsTile, { style } from './ComponentSnsTile';
import { BrushOutlined, ConstructionOutlined, FavoriteBorderOutlined, FitnessCenterOutlined, FlagOutlined, GitHub, LanguageOutlined, LocalPolice, LocalPoliceOutlined, PaletteOutlined, SchoolOutlined, ScienceOutlined, StarBorderOutlined, VerifiedOutlined, X } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

/*
・profileDataMain: プロフィール メイン部分
・profileDataLeft: プロフィール 2フェーズ目 左側部分
・profileDataRight: プロフィール 2フェーズ目 右側部分

各マップ要素の形式:
{
    title: "タイトル（必須）",
    subtitle: "サブタイトル（任意・タイトルの右に小さく表示）",
    icon: <アイコン>（必須）,
    text: "テキスト（必須）",
    detail: "詳細テキスト（任意・ホバー時に表示）"
}
*/


const profileDataMain = [
    {
        title: "学校",
        icon: <SchoolOutlined className='profile-title-icon' />,
        text: "東京都立産業技術高等専門学校 ものづくり工学科 情報システム工学コース"
    },
    {
        title: "趣味",
        icon: <PaletteOutlined className='profile-title-icon' />,
        text: "音楽鑑賞",
        detail: "Official髭男dism, Mrs. GREEN APPLE"
    },
    {
        title: "学習/使用経験のある技術",
        subtitle: "(程度問わず)",
        icon: <ConstructionOutlined className='profile-title-icon' />,
        text: "Flutter/Dart, Firebase, Python, AWS, React, Swift, Rust",
        detail: <ul style={{ textAlign: "left" }}>
            <li>日常的に学習/使用：Flutter/Dart, Python</li>
            <li>開発使用経験あり：Firebase, AWS, React</li>
            <li>触った程度や学習途上：Rust, Swift</li>
        </ul>
    },
    {
        title: "好きなアプリUI",
        icon: <BrushOutlined className='profile-title-icon' />,
        text: "Apple Music, PayPay, 三井住友銀行",
        detail: <div style={{ textAlign: "left" }}>
            <p style={{ color: "var(--common-main-green-color)" }}>【特に好きな部分】</p>
            <ul style={{ margin: 0 }}>
                <li style={{ margin: '5px 0' }}>Apple Music<br />歌詞表示, ライブラリ表示, アニメーション</li>
                <li style={{ margin: '5px 0' }}>PayPay<br />全ての要素のサイズ感, 画面遷移時のアニメーション</li>
                <li style={{ margin: '5px 0' }}>三井住友銀行<br />ブランドカラーに沿ったUI, 振込などの重要な操作を直感的に落ち着いて行えるUI</li>
            </ul>
        </div>
    }
];

const profileDataLeft = [
    {
        title: "MBTI",
        icon: <FavoriteBorderOutlined className='profile-title-icon' />,
        text: "INFJ (提唱者)"
    },
    {
        title: "学生生活で印象に残ったこと",
        icon: <StarBorderOutlined className='profile-title-icon' />,
        text: "Hack Uへの参加・研修旅行"
    },
    {
        title: "SNS等",
        icon: <LanguageOutlined className='profile-title-icon' />,
        text: <div>
            <ComponentSnsTile
                icon="github"
                title="GitHub - @laughtaone"
                url='https://github.com/laughtaone'
            />
            <ComponentSnsTile
                icon=<X />
                title="X - @laughtaone"
                url='https://x.com/laughtaone'
            />
            <ComponentSnsTile
                title="Zenn - @laughtaone"
                url='https://zenn.dev/laughtaone'
            />
            <ComponentSnsTile
                title="Wantedly"
                url='https://www.wantedly.com/id/usubataichi'
            />
            <ComponentSnsTile
                icon="appstore"
                title="AppStore"
                url='https://www.wantedly.com/id/usubataichi'
            />
        </div>
    }
];

const profileDataRight = [
    {
        title: "ゼミナールでの学習テーマ",
        icon: <ScienceOutlined className='profile-title-icon' />,
        text: "PythonやKaggleを用いたデータ分析手法学習"
    },
    {
        title: "卒業研究テーマ(現時点)",
        icon: <ScienceOutlined className='profile-title-icon' />,
        text: "PythonやLlamaを用いたアンチコメント分析と表現変更による効果の検証"
    },
    {
        title: "資格",
        icon: <LocalPoliceOutlined className='profile-title-icon' />,
        text: "（結果待ち：実用数学技能検定 2級）"
    },
    {
        title: "中学時代の部活動",
        icon: <FitnessCenterOutlined className='profile-title-icon' />,
        text: "バスケットボール部"
    },
    {
        title: "現在の夢",
        icon: <FlagOutlined className='profile-title-icon' />,
        text: <div>
            <p>プライベートで開発した自分のアプリが</p>
            <p>AppStoreのランキングに載ること</p>
        </div>,
        detail: "1つの大きな目標を掲げた方が頑張れるため"
    }
];
// --------------------------------------------------------------------------



export { profileDataMain, profileDataLeft, profileDataRight };