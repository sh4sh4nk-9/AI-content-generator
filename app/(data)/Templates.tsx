
export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates compelling blog titles based on your topic and outline.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Generate **5 creative blog titles** in bullet points based on the given **niche & outline**. Titles should be engaging, SEO-friendly, and click-worthy.',
        slug: 'generate-blog-title',
        form: [
            { label: 'Enter your blog niche', field: 'input', name: 'niche', required: true },
            { label: 'Enter blog outline', field: 'textarea', name: 'outline' }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'Generate high-quality, well-structured blog content effortlessly.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Write a **detailed blog post** based on the given **topic & outline**. The content should be engaging, informative, and optimized for SEO.',
        form: [
            { label: 'Enter your blog topic', field: 'input', name: 'topic', required: true },
            { label: 'Enter blog outline', field: 'textarea', name: 'outline' }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'Get AI-generated blog topic ideas that are engaging and trending.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/13161/13161332.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Provide **5 trending blog topic ideas** in bullet points, based on the given **niche**. Titles should be creative and aligned with current industry trends.',
        form: [
            { label: 'Enter your Niche', field: 'input', name: 'niche', required: true }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'Generate high-ranking, SEO-optimized YouTube titles.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Generate **5 SEO-optimized YouTube titles** based on the given **keywords & outline**. Titles should be engaging, keyword-rich, and optimized for rankings.',
        form: [
            { label: 'Enter your YouTube video keywords', field: 'input', name: 'keywords', required: true },
            { label: 'Enter YouTube description outline', field: 'textarea', name: 'outline' }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'Create an engaging and optimized YouTube description with emojis.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate a **4-5 line YouTube description** with emojis, based on the given **topic & outline**. The description should be engaging, concise, and encourage user interaction.',
        form: [
            { label: 'Enter your YouTube video topic/title', field: 'input', name: 'topic', required: true },
            { label: 'Enter YouTube outline', field: 'textarea', name: 'outline' }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Rewrite any article to be plagiarism-free and AI detector-proof.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite the given **article/blog post** while maintaining its meaning, making it **plagiarism-free, AI detector-safe**, and **grammatically perfect**.',
        form: [
            { label: 'Provide your article/blog post', field: 'textarea', name: 'article', required: true }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Enhance your writing by refining clarity, tone, and word choice.',
        icon: 'https://cdn-icons-png.flaticon.com/128/167/167502.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Improve the given **text** by correcting grammar, enhancing clarity, and making it more engaging. Ensure a **professional and polished tone**.',
        form: [
            { label: 'Enter text to improve', field: 'textarea', name: 'textToImprove' }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'Generate engaging Instagram posts with AI.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'Social Media',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate **3 creative Instagram post captions** based on the given **keywords**. Captions should be engaging, trendy, and optimized for engagement.',
        form: [
            { label: 'Enter keywords for your post', field: 'input', name: 'keywords', required: true }
        ]
    },
    {
        name: 'Write Code',
        desc: 'Generate high-quality code snippets in any programming language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
        slug: 'write-code',
        aiPrompt: 'Generate a **fully functional code snippet** based on the given **description & programming language**. Include comments for clarity.',
        form: [
            { label: 'Describe the code you need (include language)', field: 'textarea', name: 'codeDescription', required: true }
        ]
    },
    {
        name: 'Explain Code',
        desc: 'Understand any programming code with AI-powered explanations.',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Analyze and explain the given **code** step-by-step. Provide **clear documentation** and potential improvements.',
        form: [
            { label: 'Enter code you want to understand', field: 'textarea', name: 'codeDescription', required: true }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Generate catchy and memorable brand taglines.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketing',
        slug: 'tagline-generator',
        aiPrompt: 'Generate **5-10 catchy and brand-specific taglines** for the given **product/brand name & description**. Ensure they are creative and impactful.',
        form: [
            { label: 'Product/Brand Name', field: 'input', name: 'productName', required: true },
            { label: 'Describe what you are selling/marketing', field: 'textarea', name: 'outline', required: true }
        ]
    },
    {
        name: "Learn How To Talk To AI",
        desc: "Discover the best ways to write prompts and interact effectively with AI.",
        icon: "https://cdn-icons-png.flaticon.com/128/900/900961.png",
        category: "AI",
        slug: "prompt-generator",
        aiPrompt:
            "Provide **5-10 well-structured examples** of effective AI prompts for different use cases (e.g., marketing, coding, storytelling, analysis). Explain why each prompt works well and how users can tweak them for better results.",
        form: [
            { label: "What do you want help with?", field: "textarea", name: "query", required: true },
        ],
    },
    {
        name: "Ad Copy Generator",
        desc: "Create compelling ad copies for Facebook, Google, or LinkedIn Ads.",
        icon: "https://cdn-icons-png.flaticon.com/128/2331/2331633.png",
        category: "Marketing",
        slug: "ad-copy-generator",
        aiPrompt:
            "Generate **5 variations of high-converting ad copy** for the given **product/service & target audience**. Make them engaging, persuasive, and platform-optimized.",
        form: [
            { label: "Product/Service", field: "input", name: "product", required: true },
            { label: "Target Audience", field: "textarea", name: "audience", required: true },
        ],
    },
    {
        name: "Regex Generator",
        desc: "Generate and explain Regular Expressions (RegEx) for various tasks.",
        icon: "https://cdn-icons-png.flaticon.com/128/1079/1079976.png",
        category: "Development",
        slug: "regex-generator",
        aiPrompt:
            "Generate a **regular expression (RegEx)** based on the given description. Provide an explanation of how it works.",
        form: [
            { label: "Describe what you need", field: "textarea", name: "regexDesc", required: true },
        ],
    },
    {
        name: "Poem Generator",
        desc: "Create beautiful poems on any theme or emotion.",
        icon: "https://cdn-icons-png.flaticon.com/128/2633/2633072.png",
        category: "Creativity",
        slug: "poem-generator",
        aiPrompt:
            "Generate a **short, meaningful poem** based on the given **theme, emotion, or style**.",
        form: [
            { label: "Theme or Emotion", field: "input", name: "theme", required: true },
        ],
    },
    {
        name: "Email Responder",
        desc: "Generate professional email responses instantly.",
        icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
        category: "Productivity",
        slug: "email-responder",
        aiPrompt:
            "Generate a **professional email response** based on the given **email context**. Keep it concise and effective.",
        form: [
            { label: "Paste the email content", field: "textarea", name: "emailContent", required: true },
            { label: "Preferred Tone (Formal/Casual)", field: "input", name: "tone", required: false },
        ],
    },
        {
            name: "Notes Generator",
            desc: "Generate structured and concise notes for any chapter or topic.",
            icon: "https://cdn-icons-png.flaticon.com/128/2956/2956729.png",
            category: "Education",
            slug: "notes-generator",
            aiPrompt:
                "Generate **structured, concise, and well-organized notes** on the given **chapter or topic**. Ensure clarity and include key points, explanations, and examples where necessary.",
            form: [
                { label: "Chapter/Topic Name", field: "input", name: "topicName", required: true },
                { label: "Describe the Topic (Optional)", field: "textarea", name: "topicDescription", required: false },
                // { 
                //     label: "Preferred Note Style", 
                //     field: "select", 
                //     name: "noteStyle", 
                //     options: ["Bullet Points", "Summary", "Q&A Format", "Flashcards"], 
                //     required: false 
                // }
            ],
        },
        {
            name: 'Daily Workout Plan Generator',
            desc: 'Create a personalized workout plan based on your fitness goals.',
            category: 'Health & Fitness',
            icon: 'https://cdn-icons-png.flaticon.com/128/1616/1616487.png',
            slug: 'workout-plan-generator',
            aiPrompt: 'Generate a **personalized daily workout plan** based on the given **fitness goal, duration, and fitness level**.',
            form: [
                { label: 'Fitness Goal (e.g., Weight Loss, Muscle Gain)', field: 'input', name: 'goal', required: true },
                { label: 'Workout Duration (minutes)', field: 'input', name: 'duration', required: true },
                { label: 'Fitness Level (Beginner/Intermediate/Advanced)', field: 'input', name: 'level', required: true }
            ]
        }

    
];

