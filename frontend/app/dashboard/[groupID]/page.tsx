"use client";

import GroupDescription from "@/components/feature/GroupDescription";
import GroupDetailsBanner from "@/components/feature/GroupDetailsBanner";
import AppButton from "@/components/ui/Button";
import { useParams } from "next/navigation";
import React from "react";

const GroupDetails = () => {
  const { groupID } = useParams();
  console.log("Group ID", groupID);
  const temporalName = Array.isArray(groupID) ? groupID[0] : groupID;

  return (
    <div className="flex bg-gray-100 flex-col pb-24 min-h-screen">
      <GroupDetailsBanner groupName={temporalName} createAt="23 May 2020" />
      <GroupDescription
        body="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
"
        title="About Group"
      />

    </div>
  );
};

export default GroupDetails;
