import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation, Route, Routes } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Home, Users, Bell, MessageSquare, Search, Pencil, PlusCircle, X, Camera, Trash2 } from 'lucide-react'

// Navbar Component
function Navbar({ isLoggedIn, user, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('')
  const [skillFilter, setSkillFilter] = useState('')
  const [connectionFilter, setConnectionFilter] = useState([0])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search?q=${searchQuery}&skill=${skillFilter}&connections=${connectionFilter[0]}`)
  };

  return (
    (<nav className="fixed top-0 left-0 right-0 border-b bg-white z-10">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link to="/">
          <svg
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="35.93" height="32" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 228"
              fill="currentColor"
              className="w-8 h-8 text-blue-600">
              <path
                d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z">
              </path>
            </svg>
          </Link>
          {isLoggedIn && (
            <form onSubmit={handleSearch} className="relative flex items-center">
              <Search
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="ml-2">
                    Filters
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Skill</h4>
                      <Input
                        placeholder="Filter by skill"
                        value={skillFilter}
                        onChange={(e) => setSkillFilter(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Connections</h4>
                      <Slider
                        min={0}
                        max={500}
                        step={10}
                        value={connectionFilter}
                        onValueChange={setConnectionFilter} />
                      <div className="text-sm text-gray-500">
                        Minimum connections: {connectionFilter[0]}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </form>
          )}
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" passHref>
            <Button
              variant="ghost"
              size="sm"
              className={location.pathname === '/' ? 'text-blue-600' : ''}>
              <Home className="w-5 h-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/network" passHref>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location.pathname === '/network' ? 'text-blue-600' : ''}>
                  <Users className="w-5 h-5" />
                  <span className="sr-only">My Network</span>
                </Button>
              </Link>
              <Link to="/jobs" passHref>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location.pathname === '/jobs' ? 'text-blue-600' : ''}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <span className="sr-only">Jobs</span>
                </Button>
              </Link>
              <Link to="/messaging" passHref>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location.pathname === '/messaging' ? 'text-blue-600' : ''}>
                  <MessageSquare className="w-5 h-5" />
                  <span className="sr-only">Messaging</span>
                </Button>
              </Link>
              <Link to="/notifications" passHref>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location.pathname === '/notifications' ? 'text-blue-600' : ''}>
                  <Bell className="w-5 h-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt={user?.name || '@user'} />
                      <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login" passHref>
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup" passHref>
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>)
  );
}

// Home Page Component
function HomePage() {
  const posts = [
    {
      id: 1,
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        title: "Software Engineer at Tech Corp"
      },
      content: "Just published a new article on microservices architecture!",
      likes: 42,
      comments: 7
    },
    {
      id: 2,
      author: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        title: "Product Manager at Innovate Inc"
      },
      content: "Excited to announce our new product launch next week!",
      likes: 89,
      comments: 15
    }
  ]

  return (
    (<div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <textarea
                className="w-full p-2 border rounded"
                placeholder="What's on your mind?"
                rows={3} />
              <div className="mt-4 flex justify-end">
                <Button>Post</Button>
              </div>
            </CardContent>
          </Card>
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{post.author.name}</CardTitle>
                    <p className="text-sm text-gray-500">{post.author.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.likes} Likes</span>
                  <span>{post.comments} Comments</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Suggested Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {["Alice Johnson", "Bob Williams", "Carol Davis"].map((name) => (
                  <li key={name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarFallback>{name[0]}</AvatarFallback>
                      </Avatar>
                      <span>{name}</span>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Frontend Developer", "UX Designer", "Product Manager"].map((job) => (
                  <li key={job} className="text-sm">
                    <a href="#" className="text-blue-600 hover:underline">{job}</a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>)
  );
}

// Network Page Component
function NetworkPage() {
  const people = [
    {
      id: 1,
      name: "Alice Johnson",
      title: "Frontend Developer",
      company: "Tech Innovators",
      connections: 287,
      skills: ["React", "TypeScript", "CSS"],
      avatar: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 2,
      name: "Bob Williams",
      title: "UX Designer",
      company: "Creative Solutions",
      connections: 412,
      skills: ["UI/UX", "Figma", "User Research"],
      avatar: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 3,
      name: "Carol Davis",
      title: "Data Scientist",
      company: "Data Insights Co.",
      connections: 356,
      skills: ["Python", "Machine Learning", "Data Visualization"],
      avatar: "/placeholder.svg?height=100&width=100"
    }
  ]

  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Network</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((person) => (
          <Card key={person.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={person.avatar} alt={person.name} />
                  <AvatarFallback>{person.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <p className="text-sm text-gray-500">{person.title}</p>
                  <p className="text-sm text-gray-500">{person.company}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{person.connections} connections</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {person.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
              <Button className="w-full">Connect</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

// Jobs Page Component
function JobsPage() {
  const jobs = [
    { id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Design Co",
      location: "New York, NY"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Data Insights",
      location: "Boston, MA"
    },
  ]

  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Job Search</h1>
      <div className="mb-6">
        <Input type="text" placeholder="Search for jobs" className="w-full mb-2" />
        <Button>Search</Button>
      </div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <Button className="mt-4">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

// Messaging Page Component
function MessagingPage() {
  const conversations = [
    { id: 1, name: "Alice Johnson", lastMessage: "Hey, how's it going?", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Bob Williams", lastMessage: "Can we schedule a meeting?", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Carol Davis", lastMessage: "Thanks for your help!", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Messaging</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Input type="text" placeholder="Search messages" className="w-full mb-4" />
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <Card key={conversation.id} className="cursor-pointer hover:bg-gray-100">
                <CardContent className="flex items-center space-x-4 py-4">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{conversation.name}</h3>
                    <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Select a conversation</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Message content will go here */}
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input type="text" placeholder="Type a message..." className="flex-grow" />
                <Button>Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>)
  );
}

// Notifications Page Component
function NotificationsPage() {
  const notifications = [
    { id: 1, type: "connection", user: "Alice Johnson", action: "accepted your connection request", time: "2 hours ago", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, type: "like", user: "Bob Williams", action: "liked your post", time: "5 hours ago", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, type: "comment", user: "Carol Davis", action: "commented on your article", time: "1 day ago", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <CardContent className="flex items-center space-x-4 py-4">
              <Avatar>
                <AvatarImage src={notification.avatar} alt={notification.user} />
                <AvatarFallback>{notification.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p>
                  <span className="font-semibold">{notification.user}</span>{' '}
                  {notification.action}
                </p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

// Profile Page Component
function ProfilePage({ user }) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: user?.name || "John Doe",
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    connections: 500,
    Skill:78,
    about: "Passionate about building great software and solving complex problems. Experienced in full-stack development with a focus on scalable and maintainable solutions.",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    activity: {
      followers: 428,
      posts: [
        { id: 1, content: "Just published a new article on microservices architecture!", likes: 42, comments: 7 },
        { id: 2, content: "Excited to announce I'm speaking at the upcoming DevCon 2023!", likes: 89, comments: 15 }
      ]
    },
    experience: [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        duration: "Jan 2022 - Present",
        description: "Leading development of scalable microservices architecture. Mentoring junior developers and contributing to open-source projects.",
      },
      {
        id: 2,
        title: "Software Engineer",
        company: "Innovate Inc",
        location: "New York, NY",
        duration: "Jun 2019 - Dec 2021",
        description: "Developed and maintained multiple full-stack web applications using React, Node.js, and PostgreSQL.",
      }
    ],
    education: [
      {
        id: 1,
        school: "University of California, Berkeley",
        degree: "Master of Science in Computer Science",
        duration: "Aug 2017 - May 2019",
      },
      {
        id: 2,
        school: "Stanford University",
        degree: "Bachelor of Science in Computer Science",
        duration: "Sep 2013 - Jun 2017",
      }
    ]
  })
  const [newSkill, setNewSkill] = useState("")
  const [newExperience, setNewExperience] = useState({ title: "", company: "", location: "", duration: "", description: "" })
  const [newEducation, setNewEducation] = useState({ school: "", degree: "", duration: "" })

  const handleEdit = () => setIsEditing(true)
  const handleSave = () => setIsEditing(false)
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }
  const handleAddSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill] })
      setNewSkill("")
    }
  }
  const handleRemoveSkill = (skill) => {
    setProfile({ ...profile, skills: profile.skills.filter(s => s !== skill) })
  }
  const handleImageUpload = (e) => {
    // Handle image upload logic here
    console.log("Image uploaded:", e.target.files?.[0])
  }

  const handleExperienceChange = (id, field, value) => {
    setProfile({
      ...profile,
      experience: profile.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp)
    })
  }

  const handleAddExperience = () => {
    const id = Math.max(0, ...profile.experience.map(e => e.id)) + 1
    setProfile({
      ...profile,
      experience: [...profile.experience, { id, ...newExperience }]
    })
    setNewExperience({ title: "", company: "", location: "", duration: "", description: "" })
  }

  const handleRemoveExperience = (id) => {
    setProfile({
      ...profile,
      experience: profile.experience.filter(exp => exp.id !== id)
    })
  }

  const handleEducationChange = (id, field, value) => {
    setProfile({
      ...profile,
      education: profile.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu)
    })
  }

  const handleAddEducation = () => {
    const id = Math.max(0, ...profile.education.map(e => e.id)) + 1
    setProfile({
      ...profile,
      education: [...profile.education, { id, ...newEducation }]
    })
    setNewEducation({ school: "", degree: "", duration: "" })
  }

  const handleRemoveEducation = (id) => {
    setProfile({
      ...profile,
      education: profile.education.filter(edu => edu.id !== id)
    })
  }

  const renderSection = (section) => {
    switch (section) {
      case 'about':
        return (
          (<Card className="mb-6">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  name="about"
                  value={profile.about}
                  onChange={handleChange}
                  className="w-full"
                  rows={4} />
              ) : (
                <p>{profile.about}</p>
              )}
            </CardContent>
          </Card>)
        );
      case 'activity':
        return (
          (<Card className="mb-6">
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{profile.activity.followers} followers</span>
                </div>
                <Button variant="outline">Create a post</Button>
                {profile.activity.posts.length === 0 ? (
                  <p className="text-gray-500">You have not posted yet. Posts you share will be displayed here.</p>
                ) : (
                  <div className="space-y-4">
                    {profile.activity.posts.map(post => (
                      <Card key={post.id} className="p-4">
                        <p>{post.content}</p>
                        <div className="mt-2 text-sm text-gray-500">
                          {post.likes} likes · {post.comments} comments
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
                <Button variant="link" className="text-blue-600">Show all activity →</Button>
              </div>
            </CardContent>
          </Card>)
        );
      case 'experience':
        return (
          (<Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Experience
                {isEditing && (
                  <Button variant="ghost" size="sm" onClick={handleAddExperience}>
                    <PlusCircle className="w-4 h-4 mr-2" />Add
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {profile.experience.map((exp) => (
                <Card key={exp.id} className="p-4 mb-4 bg-gray-50">
                  <div className="flex justify-between">
                    <div className="w-full">
                      {isEditing ? (
                        <>
                          <Input
                            value={exp.title}
                            onChange={(e) => handleExperienceChange(exp.id, 'title', e.target.value)}
                            className="mb-2 font-semibold"
                            placeholder="Job Title" />
                          <Input
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                            className="mb-2 text-sm"
                            placeholder="Company" />
                          <Input
                            value={exp.location}
                            onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
                            className="mb-2 text-sm"
                            placeholder="Location" />
                          <Input
                            value={exp.duration}
                            onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                            className="mb-2 text-sm"
                            placeholder="Duration" />
                          <Textarea
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                            className="mt-2"
                            rows={3}
                            placeholder="Description" />
                        </>
                      ) : (
                        <>
                          <h4 className="font-semibold">{exp.title}</h4>
                          <p className="text-sm">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.location}</p>
                          <p className="text-sm text-gray-500">{exp.duration}</p>
                          <p className="mt-2">{exp.description}</p>
                        </>
                      )}
                    </div>
                    {isEditing && (
                      <Button variant="ghost" onClick={() => handleRemoveExperience(exp.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
              {isEditing && (
                <Card className="p-4 mb-4 bg-gray-50">
                  <Input
                    value={newExperience.title}
                    onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
                    className="mb-2"
                    placeholder="New Job Title" />
                  <Input
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    className="mb-2"
                    placeholder="New Company" />
                  <Input
                    value={newExperience.location}
                    onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                    className="mb-2"
                    placeholder="New Location" />
                  <Input
                    value={newExperience.duration}
                    onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
                    className="mb-2"
                    placeholder="New Duration" />
                  <Textarea
                    value={newExperience.description}
                    onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                    className="mb-2"
                    placeholder="New Description" />
                  <Button onClick={handleAddExperience}>Add Experience</Button>
                </Card>
              )}
            </CardContent>
          </Card>)
        );
      case 'education':
        return (
          (<Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Education
                {isEditing && (
                  <Button variant="ghost" size="sm" onClick={handleAddEducation}>
                    <PlusCircle className="w-4 h-4 mr-2" />Add
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {profile.education.map((edu) => (
                <Card key={edu.id} className="p-4 mb-4 bg-gray-50">
                  <div className="flex justify-between">
                    <div className="w-full">
                      {isEditing ? (
                        <>
                          <Input
                            value={edu.school}
                            onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                            className="mb-2 font-semibold"
                            placeholder="School" />
                          <Input
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                            className="mb-2 text-sm"
                            placeholder="Degree" />
                          <Input
                            value={edu.duration}
                            onChange={(e) => handleEducationChange(edu.id, 'duration', e.target.value)}
                            className="text-sm"
                            placeholder="Duration" />
                        </>
                      ) : (
                        <>
                          <h4 className="font-semibold">{edu.school}</h4>
                          <p className="text-sm">{edu.degree}</p>
                          <p className="text-sm text-gray-500">{edu.duration}</p>
                        </>
                      )}
                    </div>
                    {isEditing && (
                      <Button variant="ghost" onClick={() => handleRemoveEducation(edu.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
              {isEditing && (
                <Card className="p-4 mb-4 bg-gray-50">
                  <Input
                    value={newEducation.school}
                    onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
                    className="mb-2"
                    placeholder="New School" />
                  <Input
                    value={newEducation.degree}
                    onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                    className="mb-2"
                    placeholder="New Degree" />
                  <Input
                    value={newEducation.duration}
                    onChange={(e) => setNewEducation({ ...newEducation, duration: e.target.value })}
                    className="mb-2"
                    placeholder="New Duration" />
                  <Button onClick={handleAddEducation}>Add Education</Button>
                </Card>
              )}
            </CardContent>
          </Card>)
        );
      case 'skills':
        return (
          (<Card className="mb-6">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                      {isEditing && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 h-4 w-4 p-0"
                          onClick={() => handleRemoveSkill(skill)}>
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex mt-4">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a new skill"
                      className="mr-2" />
                    <Button onClick={handleAddSkill}>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Add Skill
                    </Button>
                  </div>
                )}
                <Button variant="link" className="text-blue-600">Show all skills →</Button>
              </div>
            </CardContent>
          </Card>)
        );
    }
  }

  return (
    (<div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto shadow-lg mb-8">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-white">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={profile.name} />
                  <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <label
                    htmlFor="profile-image"
                    className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer">
                    <Camera className="w-5 h-5 text-blue-600" />
                    <input
                      id="profile-image"
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      accept="image/*" />
                  </label>
                )}
              </div>
              <div>
                {isEditing ? (
                  <Input
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="text-2xl font-bold bg-white/20 text-white placeholder-white/60 mb-2" />
                ) : (
                  <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
                )}
                {isEditing ? (
                  <Input
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="text-sm bg-white/20 text-white placeholder-white/60" />
                ) : (
                  <p className="text-sm">{profile.location}</p>
                )}
                {(
                  <p className="text-sm">{profile.connections} Connections</p>
                )}
                {(
                  <p className="text-sm">Score: {profile.Skill}</p>
                )}
              </div>
            </div>
            {isEditing ? (
              <Button onClick={handleSave} variant="secondary">Save</Button>
            ) : (
              <Button onClick={handleEdit} variant="secondary">
                <Pencil className="w-5 h-5" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Open to work</h3>
            <p className="text-sm text-gray-600 mb-2">Software Engineer roles</p>
            <Button variant="link" className="text-blue-600 p-0">Show details</Button>
          </div>
          {renderSection('about')}
          {renderSection('activity')}
          {renderSection('experience')}
          {renderSection('education')}
          {renderSection('skills')}
        </CardContent>
      </Card>
    </div>)
  );
}

// Login Page Component
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just simulate a successful login
    onLogin({ name: 'John Doe', email: email })
  }

  return (
    (<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-sm text-blue-600 hover:underline">
              Do not have an account? Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}

// Signup Page Component
function SignupPage({ onSignup }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically make an API call to create a new user
    // For this example, we'll just simulate a successful signup
    onSignup({ name, email })
  }

  return (
    (<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}

// Main App Component
export function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in (e.g., by checking local storage or a token)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify(userData))
    navigate('/');
  };

  const handleSignup = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify(userData))
    navigate('/');
  };

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem('user')
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/network"
            element={isLoggedIn ? <NetworkPage /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/jobs"
            element={isLoggedIn ? <JobsPage /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/messaging"
            element={isLoggedIn ? <MessagingPage /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/notifications"
            element={isLoggedIn ? <NotificationsPage /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <ProfilePage user={user} /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />
        </Routes>
      </main>
    </div>
  );
}

export default {Navbar, HomePage, NetworkPage, JobsPage, NotificationsPage, ProfilePage, LoginPage, SignupPage}