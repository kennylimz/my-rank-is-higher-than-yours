import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <title>你什么水平？</title>
        <meta name="description" content="根据游戏段位百分比转换不同游戏的段位" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
