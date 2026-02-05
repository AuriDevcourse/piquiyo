import React from 'react'

interface MarkdownContent {
  title: string
  content: string
}

interface MarkdownRendererProps {
  filename: string
  className?: string
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filename, className }) => {
  const [content, setContent] = React.useState<MarkdownContent | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // For now, we'll use a simple approach since we're in a browser environment
        // In a real app, you'd fetch this from an API or use a proper markdown loader
        const response = await fetch(`/${filename}`)
        if (!response.ok) {
          throw new Error(`Failed to load ${filename}`)
        }
        
        const text = await response.text()
        const titleMatch = text.match(/^# (.+)$/m)
        const title = titleMatch ? titleMatch[1] : 'Untitled'
        
        setContent({ title, content: text })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [filename])

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`text-red-500 ${className}`}>
        <p>Error loading content: {error}</p>
      </div>
    )
  }

  if (!content) {
    return (
      <div className={`text-gray-500 ${className}`}>
        <p>No content available</p>
      </div>
    )
  }

  // Simple markdown parser for basic elements
  const parseMarkdown = (text: string) => {
    return text
      // Headers
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mb-2 mt-4">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mb-3 mt-6">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-4 mt-8">$1</h1>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
      // Lists
      .replace(/^- (.+)$/gm, '<li class="ml-4 mb-1">• $1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc mb-4">$1</ul>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4">')
      // Wrap in paragraphs
      .replace(/^(?!<[hul])/gm, '<p class="mb-4">')
      .replace(/(?<![>])$/gm, '</p>')
      // Clean up
      .replace(/<p><h/g, '<h')
      .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
      .replace(/<p><ul/g, '<ul')
      .replace(/<\/ul><\/p>/g, '</ul>')
  }

  return (
    <div className={`prose prose-gray max-w-none ${className}`}>
      <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content.content) }} />
    </div>
  )
}
