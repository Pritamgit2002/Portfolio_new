"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { projectDetail } from "./projectDetail/page";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.33, 2, 0.42, 2] },
  },
  closed: { width: 0 },
};

export default function Project({ project }:any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src } = project;
  return (
    <>
      <div
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className={styles.project}
      >
        <p>{title1}</p>
        <Link href="">
          <motion.div
            variants={anim}
            animate={isActive ? "open" : "closed"}
            className={styles.imgContainer}
          >
            {/* <Link href={`/projectDetail/${data.id}`}> */}
            <Image
              src={`/medias/${src}`}
              alt="photo"
              width={280}
              height={140}
              className="w-[14vw] opacity-50 cursor-pointer"
              />
              {/* </Link> */}
           
          </motion.div>
        </Link>
        <p>{title2}</p>
      </div>
    </>
  );
}
