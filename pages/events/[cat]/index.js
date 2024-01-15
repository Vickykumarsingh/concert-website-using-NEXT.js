import React from "react";
import Link from "next/link";
import Image from "next/image";
import CatEvent from "../../../src/components/events/catEvent";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <CatEvent data={data} pageName={pageName}/>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const data = await import("../../../data/data.json");
  const allPath = data.events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    };
  });
  console.log(allPath);
  return {
    paths: allPath,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((event) => {
    return event.city === id;
  });
  console.log(context);
  return {
    props: {
      data,
      pageName: id,
    },
  };
}
