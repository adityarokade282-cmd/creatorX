export const creator = {
  name: 'CreatorX',
  realName: 'Alex Rivera',
  tagline: 'YouTuber • Content Creator • Digital Creator',
  description:
    'I create entertaining, educational and inspiring content that helps people learn, grow and have fun.',
  youtubeUrl: 'https://www.youtube.com/@creatorx',
  avatar:
    'https://images.pexels.com/photos/36917955/pexels-photo-36917955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  profileImage:
    'https://images.pexels.com/photos/36917951/pexels-photo-36917951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  email: 'business@creatorx.com',
  bio: 'Alex Rivera, known online as CreatorX, is a full-time YouTuber and digital creator based in San Francisco. What started as a hobby filming tech reviews in a college dorm has grown into a channel with a passionate global audience. Alex believes great content should both entertain and teach — every video is crafted to leave viewers with something valuable, whether that is a new skill, a fresh perspective, or just a genuinely good time.',
  journey:
    'The journey began in 2021 with a single camera, a cheap tripod, and a lot of curiosity. Three years and 150+ videos later, CreatorX has become a go-to destination for technology, AI, and lifestyle content — with brand partnerships, speaking engagements, and a community that keeps showing up.',
  stats: [
    { label: 'Subscribers', value: '10K+', icon: 'users' },
    { label: 'Videos', value: '150+', icon: 'video' },
    { label: 'Total Views', value: '1M+', icon: 'eye' },
    { label: 'Years Creating', value: '3+', icon: 'calendar' },
  ],
};

export const socials = [
  {
    name: 'YouTube',
    handle: '@creatorx',
    followers: '10.2K',
    url: 'https://www.youtube.com/@creatorx',
    color: 'from-red-600 to-red-500',
    icon: 'youtube',
  },
  {
    name: 'Instagram',
    handle: '@creatorx',
    followers: '24.8K',
    url: 'https://instagram.com/creatorx',
    color: 'from-pink-600 to-purple-500',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    handle: 'Alex Rivera',
    followers: '8.5K',
    url: 'https://linkedin.com/in/creatorx',
    color: 'from-blue-700 to-blue-500',
    icon: 'linkedin',
  },
  {
    name: 'Facebook',
    handle: 'CreatorX',
    followers: '12.1K',
    url: 'https://facebook.com/creatorx',
    color: 'from-blue-600 to-blue-400',
    icon: 'facebook',
  },
  {
    name: 'X / Twitter',
    handle: '@creatorx',
    followers: '15.3K',
    url: 'https://twitter.com/creatorx',
    color: 'from-gray-800 to-gray-600',
    icon: 'twitter',
  },
];

export const categories = [
  'All',
  'Technology',
  'AI',
  'Tutorials',
  'Vlogs',
  'Lifestyle',
  'Entertainment',
];

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  views: string;
  date: string;
  thumbnail: string;
  url: string;
}

export const videos: VideoItem[] = [
  {
    id: 'v1',
    title: 'I Built an AI Assistant in 24 Hours — Here is What Happened',
    category: 'AI',
    views: '142K',
    date: 'Sep 10, 2026',
    thumbnail:
      'https://images.pexels.com/photos/19055620/pexels-photo-19055620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v2',
    title: 'The Ultimate Desk Setup for Content Creators (2026 Edition)',
    category: 'Technology',
    views: '89K',
    date: 'Sep 3, 2026',
    thumbnail:
      'https://images.pexels.com/photos/6193389/pexels-photo-6193389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v3',
    title: 'How I Edit My Videos — Full Step-by-Step Tutorial',
    category: 'Tutorials',
    views: '67K',
    date: 'Aug 28, 2026',
    thumbnail:
      'https://images.pexels.com/photos/5083605/pexels-photo-5083605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v4',
    title: 'A Day in the Life of a Full-Time YouTuber',
    category: 'Vlogs',
    views: '104K',
    date: 'Aug 20, 2026',
    thumbnail:
      'https://images.pexels.com/photos/14772071/pexels-photo-14772071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v5',
    title: '5 AI Tools That Will Replace 90% of Your Workflow',
    category: 'AI',
    views: '215K',
    date: 'Aug 14, 2026',
    thumbnail:
      'https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v6',
    title: 'Morning Routine That Changed My Productivity',
    category: 'Lifestyle',
    views: '58K',
    date: 'Aug 7, 2026',
    thumbnail:
      'https://images.pexels.com/photos/4506938/pexels-photo-4506938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v7',
    title: 'Reacting to the Weirdest Tech Gadgets of 2026',
    category: 'Entertainment',
    views: '176K',
    date: 'Jul 30, 2026',
    thumbnail:
      'https://images.pexels.com/photos/353643/pexels-photo-353643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v8',
    title: 'Beginners Guide to ChatGPT — Everything You Need to Know',
    category: 'Tutorials',
    views: '93K',
    date: 'Jul 22, 2026',
    thumbnail:
      'https://images.pexels.com/photos/8353774/pexels-photo-8353774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'v9',
    title: 'My New Studio Tour — Behind the Scenes',
    category: 'Vlogs',
    views: '81K',
    date: 'Jul 15, 2026',
    thumbnail:
      'https://images.pexels.com/photos/14772072/pexels-photo-14772072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const featuredVideo = {
  title: 'How AI Is Changing Content Creation Forever',
  description:
    'In this deep-dive video, I explore the AI tools and workflows that are transforming how creators produce, edit, and distribute content. From scriptwriting to automated editing, this is the future of content creation — and it is closer than you think.',
  thumbnail:
    'https://images.pexels.com/photos/36917945/pexels-photo-36917945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  duration: '18:42',
  views: '312K views',
  date: 'Sep 12, 2026',
};

export const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/14772070/pexels-photo-14772070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Recording podcast in home studio',
    label: 'Behind the Scenes',
  },
  {
    src: 'https://images.pexels.com/photos/5083605/pexels-photo-5083605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Microphone and laptop studio setup',
    label: 'Studio Setup',
  },
  {
    src: 'https://images.pexels.com/photos/16175209/pexels-photo-16175209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Video production crew at work',
    label: 'On Set',
  },
  {
    src: 'https://images.pexels.com/photos/8390627/pexels-photo-8390627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Videographer with stabilizing rig',
    label: 'Filming',
  },
  {
    src: 'https://images.pexels.com/photos/36287813/pexels-photo-36287813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Camera equipment in studio',
    label: 'Gear',
  },
  {
    src: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Film clapperboard in action',
    label: 'Action',
  },
];

export const achievements = [
  {
    title: '10K Subscribers',
    description: 'Reached the 10,000 subscriber milestone in under 2 years of consistent uploads.',
    icon: 'users',
    date: 'March 2026',
  },
  {
    title: '1 Million Total Views',
    description: 'Crossed 1,000,000 lifetime channel views across all content.',
    icon: 'eye',
    date: 'July 2026',
  },
  {
    title: 'YouTube Silver Creator Award',
    description: 'Eligible for the YouTube Silver Play Button after hitting the subscriber threshold.',
    icon: 'award',
    date: 'April 2026',
  },
  {
    title: '15+ Brand Collaborations',
    description: 'Partnered with leading tech and lifestyle brands for sponsored content and reviews.',
    icon: 'handshake',
    date: 'Ongoing',
  },
];

export const testimonials = [
  {
    quote:
      'CreatorX delivered one of the most authentic and engaging sponsored videos we have ever commissioned. The audience response was phenomenal — we saw a 40% increase in sign-ups directly attributable to the video.',
    name: 'Sarah Chen',
    role: 'Head of Marketing, TechFlow',
    type: 'Brand',
  },
  {
    quote:
      'I have been watching CreatorX for over a year now. The tutorials are clear, the vlogs are genuinely entertaining, and every video teaches me something I can actually use. This channel is a goldmine.',
    name: 'Marcus Johnson',
    role: 'Subscriber & Aspiring Creator',
    type: 'Audience',
  },
  {
    quote:
      'Working with Alex on our product launch was seamless. Professional, creative, and incredibly responsive — the final video exceeded every expectation we had. We will definitely be collaborating again.',
    name: 'Priya Sharma',
    role: 'Partnerships Lead, InnovateLabs',
    type: 'Collaboration Partner',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Videos', href: '#videos' },
  { label: 'Categories', href: '#categories' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
