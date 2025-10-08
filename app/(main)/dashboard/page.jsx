"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const Dashboard = () => {
  const data = useQuery(api.project.getUserProjects);
  console.log(data);

  return <div>I am on Dashboard Now ...</div>;
};

export default Dashboard;
