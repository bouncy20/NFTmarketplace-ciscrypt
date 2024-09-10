import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Tarik Tali",
      position: "FOUNDER & CEO",
      images: images.taliCEO,
    },
    {
      name: "Abdelhak Tali",
      position: "CO-FOUNDER & DATA SCIENTIST",
      images: images.m_tali,
    },
    {
      name: "Mohamed Zili",
      position: "CTO & BLOCKCHAIN OFFICER",
      images: images.zili,
    },
    {
      name: "Yasser Tali",
      position: "Chief Strategy Officer",
      images: images.yassir,
    },
    {
      name: "Oussama Hichou",
      position: "Web3 Developer",
      images: images.oussama,
    },
    {
      name: "Anas oulad ben lahcen",
      position: "software engineer",
      images: images.anas,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              Taliware is a company that specializes in biometric and geolocation authentication technology.
              Their flagship product, Biombeat, utilizes cardiac ECG biometrics to provide secure identity verification. 
              This technology leverages the unique rhythm of a user's heart, using ECG-enabled smartwatches to ensure continuous proof of identity and geolocation verification.
              This is particularly beneficial for applications in wearables, banking, IoT, and mobility sectors.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
