import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORTS
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

// IMPORTING CONTEXT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount, fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        await checkIfWalletConnected();
        if (currentAccount) {
          const items = await fetchNFTs();
          console.log(items); // Log the items directly
          setNfts(items.slice().reverse()); // Avoid mutating state directly
          setNftsCopy(items);
        }
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    loadNFTs();
  }, [currentAccount, fetchNFTs, checkIfWalletConnected]);

  // CREATOR LIST
  const creators = getTopCreators(nfts);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      {creators.length === 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}

      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts.length === 0 ? <Loader /> : <NFTCard NFTData={nfts} />}

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
