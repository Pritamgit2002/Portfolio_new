"use client";
import React, { useState, useEffect } from "react";

import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

import Image from "next/image";
import { Project } from "../../../../type";
import { db } from "../../../../firebase-config";

export default function Page() {
  const [project, setProject] = useState<Project[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

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
    <div className="w-[100%] flex items-center justify-center gap-10">
      {project.map((data) => (
        <div className="w-[320px] h-[330px]" key={data.id}>
          <div>{data.name}</div>
          <div>
            <Image
              src={data.image}
              alt="image gv"
              width={150}
              height={150}
              className="w-32 h-28"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

