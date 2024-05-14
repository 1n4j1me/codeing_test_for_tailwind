import React from 'react'
import Link from 'next/link'


const articleList = [
    {
        title: "お知らせ：「LINEヤフーTech Blog」に引っ越しました",
        author: "LINE Engineering",
        date: "2023-10-02",
        authortag: "LINE Engineering Blog official acount",
        headline: `LINE株式会社は、2023年10月1日にLINEヤフー株式会社になりました。LINEヤフー株式会社の新しいブログはこちらです。
                LINEヤフー Tech Blog（https:techblog.lycorp.co.jp/ja/blog）LINEヤフー Tech BlogのRSSこれまでの過去記事は、
                ひきつづき当サイト上でご覧いただけます。今後ともどうぞよろしくお願い申し...`,
        tag: [],
    },
    {
        title: "【インターンレポート】詳細な説明文からの人間同士のインタラクション動作生成",
        author: "馬上凌",
        date: "2023-09-29",
        authortag: "AI Dev室CVLVHLチーム",
        headline: `詳細な説明文からの人間同士のインタラクション動作生成 東京大学情報理工学系研究科修士2年の馬上凌です。
                8月21日から9月29日の6週間、LINE DSC(データサイエンスセンター)のComputer Vision Lab (CVL) Virtual Human Lab (VHL)チームにてインターンシップに参加させていただきました。
                本記事では今回私が取り...
                `,
        tag: ["behavior generation","intership","line-intern-ja"]
    },    
    {
        title: "【DroidKaigi 2023】Code Review Challenge 5問目解説",
        author: "Hidetsugu Tamaki / Ralph",
        date: "2023-09-29",
        authortag: "LINEのAndroidアプリを作っています。",
        headline: `こんにちは。コミュニケーションアプリLINEのAndroid版クライアントを開発している玉木です。
                    この記事では、DroidKaigi 2023の企業ブースで行ったCode Review Challengeの5問目の解説をします。 Code Review Challengeについてはこちらを参照してください。
                    出題タイトル: Bitter Sweets 5問目では、以下のコード...`,
        tag: ["Android","Code review"]
    },    
    {
        title: "要件定義から運用まで、ML PMインターンの役割と学び",
        author: "Lee Jaeyoung",
        date: "2023-09-29",
        authortag: "Data Science CenterのDSC Planningチーム",
        headline: `はじめにこんにちは、京都大学大学院情報学研究科知能情報学専攻修士１年生のイ ジェヨン (Lee Jaeyoung) と申します。
                    今回は、2023年夏にLINEのData Science CenterのDSC PlanningチームでML PM (Program Manager) として技術職就業型コースのインターンシップに参加しました。
                    本記事ではその内容についてお話`,
        tag: ["ML","intership","line-intern-ja"]
    },    
    {
        title: "【インターンレポート】デモグラフィックデータ可視化実装で学んだLINE NEWSのアジャイル開発",
        author: "栗本 龍一",
        date: "2023-09-29",
        authortag: "ポータル開発室 NEWSサービス開発チーム",
        headline: `はじめに こんにちは！8月21日から9月29日までの6週間、LINE株式会社でサーバーサイドエンジニアとしてインターンシップをさせていただきました栗本龍一と申します。
                    普段は大学でComputer Scienceを学んでいるほか、個人事業主としてWEBアプリケーションの開発を行っています。 
                    今回のインターンシップではNEW`,
        tag: ["LINE NEWS","intership","line-intern-ja","demographic"]
    }    
]

export default function Blog() {
    return (
        <main className="bg-white min-w-full min-h-screen">


        {/* ヘッダー */}
        <div className="flex flex-col sticky top-0">
            <div className="bg-white flex text-black justify-between pb-6">
                <div className="flex justify-evenly mt-6 ml-6 font-bold">
                    <h1 className="text-lg">LINE Engineering</h1>
                    <h1 className="ml-8 mr-8">Blog</h1>
                    <h1 className="mr-8">Interview</h1>
                    <h1 className="mr-8">Culture</h1>
                    <h1 className="mr-8">Open Source</h1>
                    <h1 className="mr-8">Careers</h1>
                    <h1 className="mr-8">Research</h1>
                </div>
                <h1 className="text-sm mt-6 mr-6">日本語</h1>
            </div>
            <div className="flex bg-black w-full h-min min-h-[65px] justify-center items-center mb-8">
                <h1 className="text-white text-sm">LINE株式会社は、2023年10月1日にLINEヤフー株式会社になりました。LINEヤフー株式会社の新しいブログはこちらです。</h1>
                <h1 className="text-white text-sm underline">
                    <Link href="https://techblog.lycorp.co.jp/ja">
                        LINEヤフー Tech Blog
                    </Link>
                </h1>
            </div>
        </div>

        {/* 本文 */}
        <div className="flex justify-center mt-32">
            <div className="flex flex-col mr-24">
                {articleList.map((article, idx) => {
                    return (
                    <div key={`article-${idx}`}>
                        <div className="flex flex-col border-b border-gray-300 w-[800px] mb-10 text-black">
                            <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
                            <div className="flex">
                                <h1 className="bg-green-500 min-w-[48px] min-h-[48px] mr-4"></h1>
                                    <div className="flex flex-col">
                                        <div className="flex">
                                            <h1 className="mr-2">{article.author}</h1>
                                            <h1 className="text-gray-400">{article.date}</h1>
                                        </div>
                                        <h1 className="text-gray-400 text-sm">{article.authortag}</h1>
                                    </div>
                            </div>
                            <h1 className="mt-6 mb-6">{article.headline}</h1>
                            <div className="flex mb-6">
                                {article.tag.map((tag,idx) => {
                                    return(
                                        <div key={`tag-${idx}`}>
                                            <h1 className="border border-gray-300 text-gray-600 text-xs mr-1">{tag}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> 
                    </div>
                    )
                })}
            </div>
            <div className="flex flex-col w-[240px] min-w-[200px]">
                <input type="search" id="site-search" name="q" placeholder="Search for KeyWord" />
                <button></button>
                <h1 className="text-black text-lg font-bold mt-12">Tags</h1>
                <h1 className="text-black font-bold mt-6">Technical Field</h1>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#AI</h1>
                    <h1 className="text-gray-400 ml-1">#Android</h1>
                    <h1 className="text-gray-400 ml-1">#Data Science</h1>
                </div>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#Fintech</h1>
                    <h1 className="text-gray-400 ml-1">#frontend</h1>
                </div>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#Infrastructure</h1>
                    <h1 className="text-gray-400 ml-1">#iOS</h1>
                </div>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#Machine learning</h1>
                    <h1 className="text-gray-400 ml-1">#Security</h1>
                </div>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#Server-side</h1>
                    <h1 className="text-gray-400 ml-1">#QA</h1>
                </div>
                <h1 className="text-black font-bold mt-6">Programming Languages</h1>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#Go</h1>
                    <h1 className="text-gray-400 ml-1">#Java</h1>
                    <h1 className="text-gray-400 ml-1">#JavaScript</h1>
                </div>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#Kotlin</h1>
                    <h1 className="text-gray-400 ml-1">#Python</h1>
                    <h1 className="text-gray-400 ml-1">#React</h1>
                </div>
                <div className="flex text-sm mt-4 ml-6">
                    <h1 className="text-gray-400">#Swift</h1>
                    <h1 className="text-gray-400 ml-1">#Vue.js</h1>
                </div>
            </div>
        </div>

        {/* フッダー */}
        <div className="flex border border-gray-300 justify-around pt-8 pb-8">
            <div className="flex">
                <h1 className="text-black text-[10px]">@LY Corporation</h1>
                <h1 className="text-black text-[10px] ml-8">Privacy Policy</h1>
            </div>
            <div className="flex">
                <h1 className="text-black text-[10px] mr-8">Family sites</h1>
                <h1 className="bg-black min-w-[16px] min-h-[16px] mr-2"></h1>
                <h1 className="bg-red-500 min-w-[16px] min-h-[16px] mr-2"></h1>
                <h1 className="bg-blue-500 min-w-[16px] min-h-[16px] mr-2"></h1>
                <h1 className="bg-gray-300 min-w-[16px] min-h-[16px] mr-2"></h1>
            </div>
        </div>


        </main>
    );
}