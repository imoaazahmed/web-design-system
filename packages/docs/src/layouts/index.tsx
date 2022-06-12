import React from 'react';
import { FrontMatter } from '../../types';
// This function must be named otherwise it disables Fast Refresh.
export default function MainLayout({
  children,
  frontMatter,
}: {
  children: React.ReactChild;
  frontMatter: FrontMatter;
}) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <h2>{frontMatter.description}</h2>
      {children}
    </div>
  );
}
