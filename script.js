document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
            navLinks.style.display = 'none';
        }
    });
    
    // Sample AI Tools Data (with free tools first and Speechma added)
    const aiTools = [
        {
            id: 1,
            name: "Speechma",
            description: "Free text-to-speech tool with Urdu language support and natural sounding voices.",
            category: ["Audio", "Urdu", "TTS"],
            pricing: "free",
            image: "https://speechma.com/images/og-image.jpg",
            link: "https://speechma.com/"
        },
        {
            id: 2,
            name: "ChatGPT",
            description: "Advanced AI chatbot that can understand and generate human-like text responses.",
            category: ["Text", "Productivity"],
            pricing: "free",
            image: "https://images.unsplash.com/photo-1682686580391-615b4b8bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
            link: "https://chat.openai.com/"
        },
        {
            id: 3,
            name: "Grammarly",
            description: "AI writing assistant that helps you write mistake-free and polished content.",
            category: ["Text", "Writing"],
            pricing: "premium",
            image: "https://images.unsplash.com/photo-1682686580391-615b4b8bd364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
            link: "https://www.grammarly.com/"
        },
        {
            id: 4,
            name: "Midjourney",
            description: "AI-powered image generation tool that creates stunning artwork from text prompts.",
            category: ["Image", "Art"],
            pricing: "paid",
            image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
            link: "https://www.midjourney.com/"
        },
        {
            id: 5,
            name: "Runway ML",
            description: "Creative toolkit that makes AI accessible for video editing and generation.",
            category: ["Video", "Editing"],
            pricing: "paid",
            image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80",
            link: "https://runwayml.com/"
        },
        {
            id: 6,
            name: "GitHub Copilot",
            description: "AI pair programmer that suggests code and entire functions in real-time.",
            category: ["Code", "Development"],
            pricing: "premium",
            image: "https://images.unsplash.com/photo-1682686580391-615b4b8bd364?ixlib=rb-4.0.3&ix