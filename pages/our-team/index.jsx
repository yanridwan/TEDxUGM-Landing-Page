import React from "react";
import Committee from "../../components/AboutUs/Committee";
import Prismic from "prismic-javascript";

import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layouts/Layout";

export default function OurTeam(props) {
  return (
    <div>
      <Committee
        title="Organizer & Co Organizer"
        division="Organizer"
        text="Responsible for acquiring the license for the event and organizing the whole team."
        {...props}
      ></Committee>
      <Committee
        title="Secretaries & Treasurer"
        division="Treasure"
        text="Responsible for the whole correspondence and managing the cash flow of the event"
        {...props}
      ></Committee>
      <Committee
        title="Curator & Event"
        division="Curev"
        text="Responsible for choosing the speaker and setting the theme for the event. "
        {...props}
      ></Committee>
      <Committee
        title="Public Relation"
        division="PublicRelation"
        text="Responsible for the event's publication and social media."
        {...props}
      ></Committee>
      <Committee
        title="Design & Documentation"
        division="DDDweb"
        text="Responsible for the event's graphic design, website, and documentation."
        {...props}
      ></Committee>
      <Committee
        title="Sponsorship & Fundraising"
        division="Fundaraising"
        text="Responsible for acquiring the needed funds through sponsor partnership and fundraise."
        {...props}
      ></Committee>

      <Committee
        title="Logistic & Consumption"
        division="Loco"
        text="Responsible for providing the needed items for the event and consumption for the attendees."
        {...props}
      ></Committee>
      <Committee
        title="Equipment & Decoration"
        division="Equipment"
        text="Responsible for decorating and setting up the event's venue."
        {...props}
      ></Committee>
    </div>
  );
}

OurTeam.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const committee = await Client().query(
    Prismic.Predicates.at("document.type", "committee")
  );

  return {
    props: {
      committee: committee,
    },
  };
}
