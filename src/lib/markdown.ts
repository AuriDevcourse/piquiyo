export interface MarkdownContent {
  title: string
  content: string
}

export function parseMarkdownContent(text: string): MarkdownContent {
  // Extract title from first h1
  const titleMatch = text.match(/^# (.+)$/m)
  const title = titleMatch ? titleMatch[1] : 'Untitled'
  
  return {
    title,
    content: text
  }
}
