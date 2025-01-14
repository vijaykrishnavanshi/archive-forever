import { css } from '@emotion/css'
import Link from 'next/link'
import Head from 'next/head'

export default function HowItWorks() {
  return (
    <div>
      <Head>
        <title>Archive Forever</title>
        <meta name="description" content="How Archive Forever works" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.archiveforever.xyz/how-it-works" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Archive Forever" />
        <meta property="og:description" content="How Archive Forever works." />
        <meta property="og:image" content="https://i.ibb.co/wK2j5Kq/igimage.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="archiveforever.xyz" />
        <meta property="twitter:url" content="https://www.archiveforever.xyz/how-it-works" />
        <meta name="twitter:title" content="Archive Forever" />
        <meta name="twitter:description" content="How Archive Forever works." />
        <meta name="twitter:image" content="https://i.ibb.co/wK2j5Kq/igimage.jpg" />
        <meta name="twitter:image:src" content="https://i.ibb.co/wK2j5Kq/igimage.jpg" />
        
      </Head>
      <div className={wrapperStyle}>
        <div className={mainContainerStyle}>
          <nav className={navStyle}>
            <Link href="/">Home</Link>
          </nav>
          <h1 className={titleStyle}>HOW IT WORKS.</h1>
          <div className={textContainerStyle}>
            <p>
            <a href="https://www.arweave.org/" target="_blank" rel="noopener">Arweave</a> is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever – for the very first time.
            </p>

            <p>
            As a collectively owned hard drive that never forgets, Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. By preserving history, it prevents others from rewriting it.
            </p>

            <p>
              Great use-cases of Arweave are archival and censorship-resistance. "Arweave’s use in the Ukraine conflict and in Hong Kong -- storing social media posts, pictures, videos, journalism and more -- has been well-documented and even referenced on the US Senate floor as a tool to fight authoritarian regimes." - <a target="_blank" rel="noopener" href="https://twitter.com/samecwilliams/status/1587937648471027714">Sam Williams, founder or Arweave.</a>
            </p>

            <p>Also Meta <a rel="noopener" target="_blank" href="https://twitter.com/ArweaveTeam/status/1587937673955926016">recently announced</a> that they would be using Arweave to permanently store digital collectables from Instagram users. Meta chose Arweave because it is the only way store data in a permanent and immutable way.</p>

            <p>
            On top of the Arweave network lives the permaweb: a global, community-owned web that anyone can contribute to or get paid to maintain.
            </p>

            <p>
            The permaweb looks just like the normal web, but all of its content – from images to full web apps – is permanent, retrieved quickly, and decentralized – forever. Just as the first web connected people over vast distances, the permaweb connects people over extremely long periods of time.
            </p>

            <p>
            The cost to upload data to the Arweave network covers the first 200 years of storage. If data storage declines are anything greater than 0.5% per year, this simply adds to the number of years that the data will be stored. The result is extremely cheap data storage costs over time.
            </p>

            <p>
              Data stored on the Arweave network should last at least 200 years (or as long as the network exists).
            </p>

            <p>To learn more about Arweave, check out <a target="_blank" rel="noopener" href="https://www.arweave.org/">their website.</a></p>

            <p>Want to support this project? Send Matic, ETH, or stablecoins to <a href="https://polygonscan.com/address/0xf59B3Cd80021b77c43EA011356567095C4E45b0e" target="_blank" rel="noopener">this address.</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

const navStyle = css`
  width: 800px;
  @media (max-width: 820px) {
    width: 100%;
    padding: 0px 40px;
  }
  @media (max-width: 520px) {
    padding: 0px 20px;
  }
`

const mainContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    padding: 0px 20px;
  }
`

const wrapperStyle = css`
  margin-top: 50px;
`

const titleStyle = css`
  margin-bottom: 0px;
  font-size: 64px;
  font-weight: 800;
  letter-spacing: 5px;
  text-align: center;
  @media (max-width: 720px) {
    font-size: 50px;
    padding: 0px 40px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
    padding: 0px 20px;
  }
`

const textContainerStyle = css`
  width: 800px;
  margin-bottom: 50px;
  p {
    font-size: 20px;
  }
  a {
    color: #668bf9;
  }
  @media (max-width: 820px) {
    width: 100%;
    padding: 0px 40px;
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 520px) {
    padding: 0px 20px;
  }
`