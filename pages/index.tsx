import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";
import styles from "../styles/Home.module.css";
import krookenomics from "../public/krookenomics.png";
import checkmark from "../public/checkmark.png";
import checkmarkOff from "../public/checkmarkOff.png";
import dynamics1 from "../public/dynamics1.png";
import dynamics2 from "../public/dynamics2.png";
import dynamics3 from "../public/dynamics3.png";
import dynamics4 from "../public/dynamics4.png";
import coin from "../public/coin.png";
import Box from "../components/Box";
import Row from "../components/Row";
import Discord from "../components/Discord";
import Twitter from "../components/Twitter";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navigation />

      <Wrapper className={styles.hero}>
        <h1>Welcome to the Krooks!</h1>
        <h2>An collection of 1,131 Krook NFTs on the Solana Blockchain</h2>
        <Row className={styles.heroButtons} gap={30}>
          <Button label="Discord" href="http://discord.gg/9gcv4dBetm" />
          <Button label="Twitter" href="https://twitter.com/KrooksSol" />
        </Row>
      </Wrapper>

      <Slider />
      <Wrapper className={styles.about}>
        <hgroup>
          <h4>About us</h4>
          <h3>What are the Krooks?</h3>
        </hgroup>
        <p>
          Krooks are a collection of 1131 randomly generated NFT’s that exist on
          the Solana Blockchain. The Krooks are not only focused on being one of
          the coolest PFP projects in sol, but have a focus to help holders who
          have been the victims of rugs.
        </p>
        <p>
          Krook holders will are able to participate in exclusive events hosted
          for the benefit such as the Rugsino, exclusive NFT mints, community
          giveaways, access to the Krook Coin, and much more.
        </p>
      </Wrapper>

      <Wrapper className={styles.krookenomics}>
        <div className={styles.krookenomicsLogo}>
          <Image {...krookenomics} alt="Krookenomics logo" />
        </div>
        <div className={styles.krookenomicsContent}>
          <Row gap={44} className={styles.krookenomicsRow}>
            <div>
              <p>
                We will be airdropping 10 KROOK per unlisted KROOK daily. This
                will begin on December 3rd. During the first week leading up to
                our first auction we will be doing bonus drops to rewards
                holders. During the first week leading up to our first auction
                we will be doing bonus drops like we did this morning in order
                to increase liquidity.
              </p>
              <p>
                Finally, we will burn 80-90% of krook turned into the rugsino
                and or auction nfts, the remainder will be used to further
                develop the project.
              </p>
              <p>
                The 10% staff allocation will be rolled out in stages over the
                next two years. 0.41% of total pool will be sent to stay per
                month.
              </p>
            </div>
            <div className={styles.coin}>
              <Image {...coin} alt="KROOK coin" objectFit="fill" />
            </div>
          </Row>

          <h3>Supply</h3>
          <Row gap={20} equal className={styles.supplyRow}>
            {[
              [
                <>
                  <strong>1131</strong>
                  <br />
                  Genesis Krooks
                </>,
                <>
                  <strong>40%</strong>
                  <br />
                  10&nbsp;tokens/day
                </>,
              ],
              ["Rug Mechanish", <strong key="1">30%</strong>],
              ["LP Pool", <strong key="1">10%</strong>],
              ["Future Development", <strong key="1">10%</strong>],
              ["Staff", <strong key="1">10%</strong>],
            ].map((inner, idx) => (
              <Box className={styles.supplyBox} key={idx}>
                {inner.map((i, idx) => (
                  <div key={idx} className={styles.supplyBoxInner}>
                    {i}
                  </div>
                ))}
              </Box>
            ))}
          </Row>
          <h3>Utility</h3>

          {[
            <>
              <h4>Community Dynamics</h4>
              <p>
                Krook Coin is a utility token created to support the Krookverse.
                The token will be used for bidding and obtaining Krook Specific
                NFT’s such as banners, lore based NFT’s and some 1/1
                legendaries!
              </p>
            </>,
            <>
              <h4>Henchmen</h4>
              <p>
                By holding a minimum of 2 Krooks, you can pay a fee in Krook
                Coins to hire a young henchman. These henchmen will travel
                around the Krookverse and collect Krook Coin debts. There will
                be a limited supply of Henchmen and they will be crucial to
                earning some future rewards!
              </p>
            </>,
          ].map((a, i) => (
            <Box color="red" className={styles.utilityBox} key={i}>
              {a}
            </Box>
          ))}
          <h3>Henchmen Dynamics</h3>
          <Row gap={44} equal className={styles.henchmenRow}>
            {[
              <>
                <h5>1 Krook</h5>
                <Image {...dynamics1} alt="One Krook" />
              </>,
              <>
                <h5>1 Krook</h5>
                <Image {...dynamics2} alt="Another Krook" />
              </>,
              <>
                <h5>Krook Coins</h5>
                <div className={styles.dynacmisBottom}>
                  <Image {...dynamics3} alt="Krook coins" />
                </div>
              </>,
              <>
                <h5>Henchmen</h5>
                <div className={styles.dynacmisBottom}>
                  <Image {...dynamics4} alt="Henchmen" />
                </div>
              </>,
            ].map((a, i) => (
              <Box color="purple" className={styles.henchmenBox} key={i}>
                {a}
              </Box>
            ))}
          </Row>
          <h3>Governance</h3>
          <p>
            Krook Coins will also be utilized as a tool for community voting,
            while we will not be setting up the typical DAO users have become
            accustomed too, we still want to have an active community driven
            experience.
          </p>
        </div>

        <hr />

        <hgroup>
          <h4>What&apos;s ahead</h4>
          <h3>Roadmap</h3>
        </hgroup>

        <ol className={styles.roadmap}>
          {[
            [
              true,
              "Phase 1",
              "Mint of 1,111 Krooks, Secondary Listing and Grape Verification for Krook holders.",
            ],
            [true, "Phase 2", "Begin Krookenomics token distribution."],
            [
              false,
              "Phase 3",
              "Feed your Krook - Find a way to exchange Rugged NFTs for tokens without allowing abuse.",
            ],
            [false, "Phase 4", "1/1 Auctions with tokens / sol."],
            [
              false,
              "Phase 5",
              "Henchmen, Take two Of your krooks and a fee in Krook Coins in order to train a henchman, a younger krook, that will have further utility.",
            ],
          ].map(([checked, title, content], i) => (
            <li key={i}>
              <Row center gap={30}>
                <div className={styles.checkmark}>
                  {checked ? (
                    <Image
                      {...checkmark}
                      width="38"
                      height="38"
                      alt="Checkmark checked"
                    />
                  ) : (
                    <Image
                      {...checkmarkOff}
                      width="38"
                      height="38"
                      alt="Checkmark unckecked"
                    />
                  )}
                </div>
                <div>
                  <h4>{title}</h4>
                  {content}
                </div>
              </Row>
            </li>
          ))}
        </ol>
      </Wrapper>

      <Wrapper className={styles.faq}>
        <hgroup>
          <h4>Your questions, answered</h4>
          <h3>FAQ</h3>
        </hgroup>

        <div className={styles.faqBox}>
          <h4>Wen Mint?</h4>
          <p>
            We are minting sometime between the 26th and 27th of November, after
            thanksgiving to allow people to spend time with their families and
            attend to the holidays. IRL &gt; NFT
          </p>
          <h4>Supply?</h4>
          <p>
            1111 Krooks, with around 20 or so for giveaways and project
            development.
          </p>
          <h4>Price?</h4>
          <p>
            TBD. We want to come to a fair price for both the team and our
            minters. We want to provide a low entry price into our project and
            leave room for upside on secondary.
          </p>
          <h4>Roadmap?</h4>
          <p>
            We have a few ideas cooking now. We do not want to overpromise, but
            we also understand that just offering a PFPis not the most appealing
            aspect to mintoooors.
          </p>
          <h4>Who are we?</h4>
          <p>
            We have been on dev teams, advisory teams, DAOteams, or mods for
            other projects on Solana. We have also been around since august of
            2021. Some of our first mints include SMB, Thugbirdz, PiggysolGang,
            Sollamas and others. So we have been around.
          </p>
          <h4>What’s our goal?</h4>
          <p>
            To build a small strong community where you can come and be
            yourself. We understand that many other projects have been around
            longer than us and have high entry costs. We want to build something
            with you, and give you a chance to be early.
          </p>
        </div>
      </Wrapper>

      <Wrapper className={styles.footer}>
        <Row spread center>
          <Image
            src="/krooks-logo-footer.svg"
            className={styles.logo}
            alt="Krooks Logo"
            width={144}
            height={30}
          />
          <Row gap={30}>
            <Discord />
            <Twitter />
          </Row>
        </Row>
      </Wrapper>
    </div>
  );
};

export default Home;
