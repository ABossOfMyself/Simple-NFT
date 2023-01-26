import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/ABossOfMyself/Simple-NFT.git" target="_blank" rel="noopener noreferrer">
      <PageHeader title="🖼 Simple NFT" style={{ cursor: "pointer" }} />
    </a>
  );
}
