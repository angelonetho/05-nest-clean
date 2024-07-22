import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ValueObjetct } from '@/core/entities/value-object'

export interface CommentWithAuthorProps {
  commentId: UniqueEntityID
  content: string
  authorId: UniqueEntityID
  author: string
  createdAt: Date
  updatedAt?: Date | null
}

export class CommentWithAuthor extends ValueObjetct<CommentWithAuthorProps> {
  get commentId() {
    return this.props.commentId
  }

  get content() {
    return this.props.content
  }

  get authorId() {
    return this.props.author
  }

  get author() {
    return this.props.author
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: CommentWithAuthorProps) {
    return new CommentWithAuthor(props)
  }
}
