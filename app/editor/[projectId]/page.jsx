"use client";

import { useParams } from "next/navigation";

const Editor = async () => {
  const { projectId } = await useParams();
  return <div> Editor : {projectId} </div>;
};

export default Editor;
// import React from "react";
// import { useParams } from "next/navigation";

// export default function EditorPage() {
//   const params = useParams();
//   console.log("Params:", params);

//   return (
//     <div style={{ padding: "20px", fontSize: "20px" }}>
//       <h1>Editor Page</h1>
//       <p>Project ID: {params?.projectId || "No projectId found"}</p>
//     </div>
//   );
// }
