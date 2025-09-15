import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import { blogPostContainerID } from '@docusaurus/utils-common'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/BlogPostItem/Content'
import MDXContent from '@theme/MDXContent'

export default function BlogPostItemContent({ children, className }: Props): JSX.Element {
  const { isBlogPostPage } = useBlogPost()
  return (
    <div
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={cn('markdown', className)}
      itemProp="articleBody"
      style={{ position: 'relative' }}
    >
      <MDXContent>{children}</MDXContent>
    </div>
  )
}
