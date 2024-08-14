import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function markdownToReact (markdown: string) {
  return (
    <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
  )
}