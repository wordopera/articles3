// filepath: components/Comments.js
// date: October 18, 2024
// description: Comments component for blog posts, migrated from TypeScript to JavaScript.

'use client';

import { Comments as CommentsComponent } from 'pliny/comments';
import { useState } from 'react';
import siteMetadata from '@/data/siteMetadata';

export default function Comments({ slug }) {
  const [loadComments, setLoadComments] = useState(false);

  if (!siteMetadata.comments?.provider) {
    return null;
  }

  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  );
}
