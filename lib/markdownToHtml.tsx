import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function markdownToReact (markdown: string) {
  return (
    <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
  )
}