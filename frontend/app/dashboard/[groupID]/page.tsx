"use client";

import GroupDescription from "@/components/feature/GroupDescription";
import GroupDetailsBanner from "@/components/feature/GroupDetailsBanner";
import { useParams } from "next/navigation";
import React from "react";

const GroupDetails = () => {
  const { groupID } = useParams();
  const temporalName = groupID[0]
  return (
    <div className="flex bg-gray-100 flex-col pb-24 min-h-screen">

      <GroupDetailsBanner
        groupName={temporalName}
        createAt="23 May 2020"
      />
      <GroupDescription
        body="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

"
        title="About Group"
      />
    </div>
  );
};

export default GroupDetails;
