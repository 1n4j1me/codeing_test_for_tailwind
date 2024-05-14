import React from 'react'

const articleList = [
  {
    publishDate: '2024/04/24',
    title: 'ElasticsearchのFunction Score Queryのパフォーマンスを最適化する',
    author: 'mrkm4ntr',
    tags: []
  },
  {
    publishDate: '2024/04/18',
    title: 'Oktaアクセス権限のスケーラブルなレビュー方法',
    author: 'simon',
    tags: ["Security"]
  },
  {
    publishDate: '2024/04/11',
    title: 'LLMを活用した大規模商品カテゴリ分類への取り込み',
    author: 'UchidaNaotaka',
    tags: ["AI"]
  },
  {
    publishDate: '2024/04/02',
    title: 'gRPC Federation: gRPC サービスのためのProtocolBuffer を進化させるDSL',
    author: 'goccy',
    tags: ["Backend","Development"]
  },
  {
    publishDate: '2024/03/29',
    title: 'mercari.go #25 を開催しました #mercarigo',
    author: 'hiroebe',
    tags: ["Development"]
  }
]

export default function Blog() {
  return (
    <main className='bg-white min-h-screen'>
      {/* ヘッダー */}
      <div className="flex">
        <Logo />
        <div className='flex flex-col w-full'>
          <Navi />
          <Menus />
        </div>
      </div>

      {/* ブログ記事の一覧 */}
      <h1 className="text-black text-xl font-bold ml-96 mt-8 mb-8">最新記事</h1>
      {/* ブログの記事ブロック */}
      <div className="flex">
      <div className="flex flex-wrap w-full max-w-[1165px]">
      {articleList.map((article, idx) => {
        return (
          <div key={`article-${idx}`}>
            <div className="flex flex-col border border-zinc-400 w-full max-w-[781px] ml-96 mb-4 pt-4 pl-6 pr-6 pb-4">
              <h1 className='text-black'>{article.publishDate}</h1>
              <div className="flex">
                {/* 画像 */}
                <div className="bg-red-600 bg-left w-[196px] h-[110px] min-w-[196px] min-h-[110px]"> </div>
                {/* テキスト */}
                <div className='w-full ml-4 mb-4'>
                  <h1 className='text-black mr-8'>{article.title}</h1>
                  <div className="flex justify-between pt-4">
                    <div className="flex flex-col">
                      <div className="flex">
                        {article.tags.map((tag, idx) => {
                          return (
                          <div key={`tags-${idx}`}>
                            <h1 className='text-gray-500 text-xs mt-4 mr-4'>{tag}</h1>
                          </div>
                          )
                        })}
                      </div>
                      <h1 className='text-black text-xs mt-1 mr-8'>Author: <span className='text-gray-500'>{article.author}</span></h1>
                    </div>
                      <h1 className='text-black'>→</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      </div>
        <div className="flex flex-col pl-4">
          <div className="self-start">
            <div className="text-black rounded-lg border-solid border">
              <div className="pt-2 pl-4 pr-2 pb-2">
                <label htmlFor="site-search">
                  <input type="search" id="site-search" name="q" placeholder="記事を検索" />
                  <button>検索</button>
                </label>
              </div>
            </div>
          </div>
          <div className="pl-2">
            <h1 className='text-black text-lg font-bold mt-2 mb-2'>カテゴリーから見つける</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>AI</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>Backend</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>Client side</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>Development</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>Infrastructure</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>Organization</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>QA</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>Research & Advanced Tech</h1>
            <h1 className='text-gray-500 ml-4 mb-2'>Security</h1>
            <h1 className='text-black text-lg font-bold mb-2'>言語切り替え</h1>
            <div className='rounded-md border-solid border pt-2 pl-2 pr-2 pb-2'>
              <div className="flex">
                <h1 className="bg-red-600 bg-left w-[48px] h-[48px] min-w-[48px] min-h-[48px]"></h1>
                <h1 className="content-center text-sm text-black ml-2">英語限定の記事あります</h1>
                <div className="grow content-center">
                  <h1 className="content-center text-end text-red-600">→</h1>
                </div>
              </div>
            </div>
            <h1 className='text-black text-lg font-bold mt-2 mb-2'>フォローする</h1>
            <div className="flex">
              <h1 className="bg-black w-[48px] h-[48px] min-w-[48px] mix-h-[48px] mr-1"></h1>
              <h1 className="bg-blue-500 w-[48px] h-[48px] min-w-[48px] mix-h-[48px] mr-1"></h1>
              <h1 className="bg-orange-500 w-[48px] h-[48px] min-w-[48px] mix-h-[48px]"></h1>
            </div>
          </div>
        </div>
      </div>
      {/* 記事のカードは境界(border)を使用する*/}
      {/* カード内の矢印は矢印をそのまま */}
      {/* 記事を検索はinput typeから探す */}
      {/* フッター */}
        <div className="bg-zinc-700 flex justify-center">
          <div>
            <h1 className='text-white text-xl mr-16 mt-16'>Company</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Mercari, Inc</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Merpay, Inc</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Mercari US</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Mercoin</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Mercari India</h1>
          </div>
          <div>
            <h1 className='text-white text-xl mr-16 mt-16'>Owned media</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>mercan</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Design blog</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>AI Web</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Analytics blog</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>mercari R4D</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Engineering blog (USA)</h1>
          </div>
          <div>
            <h1 className='text-white text-xl mr-16 mt-16'>Careers</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Engineering</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Mercari (JP)</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Mercari (USA)</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Mercari (India)</h1>
          </div>
          <div>
            <h1 className='text-white text-xl mr-16 mt-16'>Resources</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>GitHub - mercari</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Speakerdeck - mercari</h1>
          </div>
          <div>
            <h1 className='text-white text-xl mr-16 mt-16'>Events</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>connpass - Mercari</h1>
            <h1 className='text-gray-500 text-xs mr-16 mt-4'>Meetup.com</h1>
          </div>
        </div>
        <h1 className='bg-zinc-700 text-white text-center text-[32px] pt-16'>mercari</h1>
    </main>
  );
}

const Logo = () => {
  return (
    <div className="flex flex-col min-w-[400px] bg-blue-500">
      <h1 className='text-black'>mercari engineer blog</h1>
      <h1 className='text-black'>メルカリのエンジニア情報ポータルサイト</h1>
    </div>
  )
}

const Navi = () => {
  return (
    <div className="flex justify-end bg-green-500">
      <h1 className='text-black mr-4'>日本語</h1>
      <h1 className='text-black mr-4'>English</h1>
      <h1 className='text-black mr-4'>Twitter(X)</h1>
      <h1 className='text-black mr-4'>Linkedin</h1>
      <h1 className='text-black mr-4'>RSS</h1>
    </div>
  )
}

const Menus = () => {
  return (
    <div className='flex justify-end pt-4 bg-red-500'>
      <div className='px-2'>
        <h1 className='text-black'>Organization</h1>
        <div className="flex">
          <h1 className='text-black mr-4'>Roles</h1>
          <h1 className='text-black'>Culture</h1>
        </div>
      </div>
      <div className='px-2'>
        <h1 className='text-black'>Technology</h1>
        <div className="flex">
          <h1 className='text-black mr-4'>Technology-stack</h1>
          <h1 className='text-black mr-4'>Open-source</h1>
          <h1 className='text-black mr-4'>Output</h1>
          <h1 className='text-black'>Learning-materials</h1>
        </div>
      </div>
      <div className='px-2'>
        <h1 className='text-black'>Other</h1>
        <div className="flex">
          <h1 className='text-black mr-4'>Event</h1>
          <h1 className='text-black mr-4'>Blog</h1>
          <h1 className='text-black'>Careers</h1>
        </div>
      </div>
    </div>
  )
}