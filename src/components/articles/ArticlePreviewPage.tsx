"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Download, Eye, MessageCircle, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { GoBackRoute } from '../reports/GoBackRoute';
import PrimaryActionButton from '../ui/PrimaryButton';
import PrimaryOutlineButton from '../ui/PrimaryOutlineButton';
import { ArticleAuthorInfo } from './ArticleAuthorInfo';

const placeholderImageURL = process.env.NEXT_PUBLIC_IMAGE_PLACEHOLDER_URL;
// Mock data - replace with your actual data fetching logic
const mockArticleData = {
    title: "Database for Software Developers",
    category: "SQL",
    author: {
        name: "Sufain Huzaif",
        avatar: placeholderImageURL + 'Sufain Huzaif',
    },
    publishDate: "11 Apr 2025",
    publishTime: "10:49 AM",
    views: 125,
    content: `
    <p>In today's technology-driven world, understanding databases is no longer optional for software developers. Whether you're building a small application, a large-scale platform, or anything in between, a database acts as the foundation for storing, retrieving, and managing data efficiently. In this article, we'll explore why databases are crucial for software developers, different types of databases, and how to choose the right one for your project.</p>
    
    <h3>Why Databases Matter for Developers</h3>
    <p>Databases provide structured ways to manage large volumes of data. As a developer, you need to:</p>
    <ul>
      <li><strong>Store Data Reliably:</strong> Applications, from mobile apps to enterprise software, require robust data storage.</li>
      <li><strong>Ensure Quick Access:</strong> Performance often depends on how quickly your app can retrieve information.</li>
      <li><strong>Maintain Data Integrity:</strong> Databases offer mechanisms like constraints, transactions, and indexes to ensure the data remains accurate and consistent.</li>
      <li><strong>Scale Applications:</strong> As your application grows, a well-structured database ensures scalability and fault tolerance.</li>
    </ul>
    <p>Without a good grasp of databases, developers risk building unstable, slow, or unscalable applications.</p>
    
    <h3>Types of Databases</h3>
    <p>Understanding different types of databases is vital because each has its strengths and use cases:</p>
    
    <h4>1. Relational Databases (SQL)</h4>
    <ul>
      <li><strong>Examples:</strong> PostgreSQL, MySQL, Microsoft SQL Server</li>
      <li><strong>Structure:</strong> Tables with rows and columns</li>
      <li><strong>Best for:</strong> Applications needing complex queries, strong consistency, and structured data.</li>
    </ul>
    
    <h4>2. NoSQL Databases</h4>
    <ul>
      <li><strong>Examples:</strong> MongoDB (Document), Redis (Key-Value), Neo4j (Graph)</li>
      <li><strong>Structure:</strong> Flexible schemas (JSON-like documents, key-value pairs, graphs)</li>
      <li><strong>Best for:</strong> Handling unstructured data, horizontal scaling, real-time web apps.</li>
    </ul>
  `,
    votes: {
        yes: 25,
        no: 2
    },
    comments: [
        {
            id: 1,
            author: {
                name: "James P. Chandra",
                avatar: placeholderImageURL + 'James P. Chandra',
                initials: "JC"
            },
            date: "28th July, 2025",
            time: "04:25 pm",
            content: "This article is a must-read for junior developers! I especially appreciated the breakdown between SQL, NoSQL, and NewSQL."
        },
        {
            id: 2,
            author: {
                name: "Franklin Benjamin",
                avatar: placeholderImageURL + 'Franklin Benjamin',
            },
            date: "28th July, 2025",
            time: "04:25 pm",
            content: "Great guide! Would love to see a future article covering 'Best Practices for Database Security'."
        }
    ]
};


const ArticlePreviewPage = ({
    editorContent = '',
    articleTitle = '',
    authorName = '',
    category = '',
    canExport = true,
    seeComments = true,
}) => {
    const [newComment, setNewComment] = useState('');
    const [hasVoted, setHasVoted] = useState(false);
    const [voteType, setVoteType] = useState<'yes' | 'no' | null>(null);
    const [localVotes, setLocalVotes] = useState(mockArticleData.votes);

    // Use editor content if provided, otherwise use mock content
    const displayContent = editorContent || mockArticleData.content;

    const handleVote = (type: 'yes' | 'no') => {
        if (hasVoted) return;

        setHasVoted(true);
        setVoteType(type);

        if (type === 'yes') {
            setLocalVotes(prev => ({ ...prev, yes: prev.yes + 1 }));
        } else {
            setLocalVotes(prev => ({ ...prev, no: prev.no + 1 }));
        }
    };

    const handleCommentSubmit = () => {
        if (!newComment.trim()) return;

        // Here you would typically submit to your API
        console.log('Submitting comment:', newComment);
        setNewComment('');
    };



    const handleExport = () => {
        // Implement export functionality
        console.log('Export article');
    };

    return (
        <div className="min-h-screen bg-gray-50 mb-8">

            {/* Main Content */}
            <Card className="bg-white shadow-sm">
                <CardContent className="p-8">
                    <div className='flex'>
                        {/* Left Back Button */}
                        <div className='flex flex-1 items-start gap-2'>
                            <GoBackRoute />
                            <span>Back</span>
                        </div>

                        {/* Middle - Main Content */}
                        <div className='flex flex-col flex-6'>
                            {/* Article Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Badge variant="secondary" className="bg-red-100 text-red-800 font-medium">
                                            {mockArticleData.category}
                                        </Badge>
                                    </div>

                                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                                        {mockArticleData.title}
                                    </h1>

                                    <ArticleAuthorInfo
                                        authorName={mockArticleData.author.name}
                                        authorAvatar={mockArticleData.author.avatar}
                                        publishDate={mockArticleData.publishDate}
                                        publishTime={mockArticleData.publishTime}
                                        views={mockArticleData.views}
                                    />
                                </div>

                                {canExport &&
                                    <div className="flex items-center gap-4">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                                            onClick={handleExport}
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Export as CSV
                                        </Button>
                                    </div>
                                }
                            </div>


                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none mb-12">
                                <div
                                    dangerouslySetInnerHTML={{ __html: displayContent }}
                                    className="text-gray-700 leading-relaxed"
                                />
                            </div>

                            {/* Voting Section */}
                            <div className="border-t border-off-white-4 pt-8 mb-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-700 font-bold">Was this article helpful?</span>

                                    <div className="flex items-center gap-2">
                                        <PrimaryOutlineButton
                                            onClick={() => { handleVote('yes') }}>
                                            <ThumbsUp className="w-4 h-4" />
                                            Yes
                                        </PrimaryOutlineButton>

                                        <PrimaryOutlineButton
                                            onClick={() => { handleVote('no') }}>
                                            <ThumbsDown className="w-4 h-4" />
                                            No
                                        </PrimaryOutlineButton>
                                    </div>

                                    <div className="ml-auto text-sm text-gray-500">
                                        {localVotes.yes} Yes | {localVotes.no} No
                                    </div>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="border-t border-off-white-4 pt-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <MessageCircle className="w-5 h-5 text-gray-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Comments</h3>
                                </div>

                                {/* Comment Input */}
                                <div className="mb-8">
                                    <Textarea
                                        placeholder="Post your comment here"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        className="min-h-[100px] mb-4"
                                    />
                                    <div className="flex justify-end">
                                        <PrimaryActionButton
                                            onClick={handleCommentSubmit}
                                            disabled={!newComment.trim()}>
                                            Post
                                        </PrimaryActionButton>
                                    </div>
                                </div>

                                {/* Comments List */}
                                {seeComments &&
                                    <div className="space-y-6">
                                        {mockArticleData.comments.map((comment) => (
                                            <div key={comment.id} className="flex flex-col gap-3">
                                                <ArticleAuthorInfo
                                                    authorName={comment.author.name}
                                                    authorAvatar={comment.author.avatar}
                                                    publishDate={comment.date}
                                                    publishTime={comment.time}
                                                />
                                                <p className="ml-14 text-gray-700 leading-relaxed">{comment.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                }

                            </div>
                        </div>

                        {/* Right - Just design */}
                        <div className='flex flex-1 items-start gap-2'></div>
                    </div>
                </CardContent>
            </Card>
        </div >
    );
};

export default ArticlePreviewPage;