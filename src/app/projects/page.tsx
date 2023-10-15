"use client";

import React, { useState, useEffect } from "react";
import { DocumentData, QueryDocumentSnapshot, collection, getDocs } from '@firebase/firestore';
import { Project } from '../../../type';
import { db } from '../../../firebase-config';
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { motion } from "framer-motion";




const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.33, 2, 0.42, 2] },
  },
  closed: { width: 0 },
};

export default function ProjectPro() {
  const [project, setProject] = useState<Project[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [isActive, setIsActive] = useState(false);


  const blogsCollectionRef = collection(db, "project1");

  useEffect(() => {
    setLoading(true);
    const getProjs = async () => {
      try {
        const data = await getDocs(blogsCollectionRef);
        console.log("db filteredData  ---->", data);
        const filteredData = data.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) => ({
            ...doc.data(),
            id: doc.id,
          })
        ) as Project[];
        setProject(filteredData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getProjs();
  }, []);

  return (
    <div className="bg-blue-500">
     {project.map((data) => (
      // eslint-disable-next-line react/jsx-key
      <div
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className={styles.project}
      >
        <p>{data.name}</p>
          <motion.div
            variants={anim}
            animate={isActive ? "open" : "closed"}
            className={styles.imgContainer}
          >
            {/* <Link href={`/projectDetail/${data.id}`}> */}
            <Image
              src={data.image}
              alt="photo"
              width={280}
              height={140}
              className={styles.img}
              />
              {/* </Link> */}
           
          </motion.div>
        <p>{data.tags}</p>
      </div>
      ))}
    </div>
  );

}
