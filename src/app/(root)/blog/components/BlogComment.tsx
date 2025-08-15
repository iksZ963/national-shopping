"use client"
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { User, ArrowUpCircle, MessageSquare, Trash } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  nestedReplies: NestedReply[];
}

interface NestedReply {
  id: number;
  author: string;
  date: string;
  content: string;
}

const BlogComment = ({ initialComments }: { initialComments: Comment[] }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState({
    author: '',
    content: '',
  });

  const handleNewCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  const handleNewCommentSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCommentObj: Comment = {
      id: comments.length + 1,
      author: newComment.author || 'Anonymous',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      content: newComment.content,
      nestedReplies: [],
    };
    setComments([...comments, newCommentObj]);
    setNewComment({ author: '', content: '' });
  };

  const handleReplySubmit = async (event: React.FormEvent<HTMLFormElement>, commentId: number) => {
    event.preventDefault();
    const replyContent = event.currentTarget.elements.namedItem('reply') as HTMLTextAreaElement;
    const newReply: NestedReply = {
      id: comments[commentId - 1].nestedReplies.length + 1,
      author: 'New User', // Change this to use actual user info or a consistent default
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      content: replyContent.value,
    };
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          nestedReplies: [...comment.nestedReplies, newReply],
        };
      }
      return comment;
    });
    setComments(updatedComments);
    replyContent.value = '';
  };

  const handleDeleteComment = (commentId: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleDeleteReply = (commentId: number, replyId: number) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.nestedReplies.filter((reply) => reply.id !== replyId);
        return {
          ...comment,
          nestedReplies: updatedReplies,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  useEffect(() => {
    // Example of an effect that runs only once, after initial render
  }, []);

  return (
    <Card className="p-6 my-6">
      {/* New Comment Form */}
      <form onSubmit={handleNewCommentSubmit}>
        <div className="flex items-center mb-4">
          <Image
            width={40}
            height={40}
            className="h-12 w-12 rounded-full object-cover"
            src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
            alt="User avatar"
          />
          <div className="ml-4 flex-1">
            <input
              type="text"
              name="author"
              value={newComment.author}
              onChange={handleNewCommentChange}
              placeholder="Your name"
              className="w-full bg-gray-100 rounded-md p-3 text-sm focus:outline-none focus:bg-white"
            />
            <textarea
              name="content"
              value={newComment.content}
              onChange={handleNewCommentChange}
              placeholder="Write a new comment..."
              className="w-full mt-2 bg-gray-100 rounded-md p-3 text-sm focus:outline-none focus:bg-white resize-none"
              rows={3}
            />
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-150 ease-in-out"
          >
            <MessageSquare className="w-4 h-4 mr-1" /> Post Comment
          </button>
        </div>
      </form>

      {/* Existing Comments */}
      <div className="mt-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
                alt="User avatar"
              />
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-semibold text-gray-900">{comment.author}</h3>
                <p className="text-xs text-gray-600">{comment.date}</p>
              </div>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-xs font-semibold text-red-600 flex items-center hover:text-red-700 focus:outline-none focus:text-red-700 transition duration-150 ease-in-out"
              >
                <Trash className="w-3 h-3 mr-1" /> Delete
              </button>
            </div>
            <p className="text-gray-800 leading-relaxed">{comment.content}</p>

            {/* Reply Form */}
            <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
              <textarea
                name="reply"
                className="w-full bg-gray-100 rounded-md p-2 text-xs focus:outline-none focus:bg-white resize-none"
                rows={2}
                placeholder="Write a reply..."
              />
              <div className="mt-1 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-150 ease-in-out"
                >
                  <ArrowUpCircle className="w-3 h-3 mr-1" /> Post Reply
                </button>
              </div>
            </form>

            {/* Nested Replies */}
            <div className="ml-8 mt-2">
              {comment.nestedReplies.map((reply) => (
                <div key={reply.id} className="bg-gray-200 rounded-lg p-3 mb-2">
                  <div className="flex items-center mb-1">
                    <Image
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
                      alt="User avatar"
                    />
                    <div className="ml-2 flex-1">
                      <h4 className="text-xs font-semibold text-gray-900">{reply.author}</h4>
                      <p className="text-xs text-gray-600">{reply.date}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteReply(comment.id, reply.id)}
                      className="text-xs font-semibold text-red-600 flex items-center hover:text-red-700 focus:outline-none focus:text-red-700 transition duration-150 ease-in-out"
                    >
                      <Trash className="w-3 h-3 mr-1" /> Delete
                    </button>
                  </div>
                  <p className="text-sm text-gray-800">{reply.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BlogComment;