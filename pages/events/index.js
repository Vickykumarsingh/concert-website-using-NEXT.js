import React from "react";
import Link from "next/link";
import Image from "next/image";
import AllEvents from "../../src/components/events/event-page";

const EventsPage = ({ data }) => {
  return (
    <AllEvents data={data}/>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const data = await import("../../data/data.json");
  return { props: { data: data.events_categories } };
}
