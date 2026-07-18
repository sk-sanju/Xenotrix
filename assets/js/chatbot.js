document.addEventListener("DOMContentLoaded", function () {
    // Inject Chatbot HTML
    const chatbotHTML = `
        <div id="chatbot-container">
            <button id="chatbot-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
            </button>
            <div id="chatbot-window">
                <div id="chatbot-header">
                    <span>Xeno</span>
                    <button id="chatbot-close">&times;</button>
                </div>
                <div id="chatbot-messages">
                    <div class="chat-message bot">
                        Hello! I am the Xeno. How can I help you learn about our technologies today?
                    </div>
                </div>
                <div id="chatbot-presets">
                    <!-- Presets will be loaded here -->
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    const toggleBtn = document.getElementById('chatbot-toggle');
    const closeBtn = document.getElementById('chatbot-close');
    const chatWindow = document.getElementById('chatbot-window');
    const messagesContainer = document.getElementById('chatbot-messages');
    const presetsContainer = document.getElementById('chatbot-presets');

    // Preset Q&A Data
    const presets = [
        {
            q: "What services does Xenotrix provide?",
            a: "We specialize in Web Development, Mobile App Development, AI Solutions, Data Analytics & BI, UI/UX Design, and more."
        },
        {
            q: "Do you offer AI integration?",
            a: "Yes! We integrate advanced AI technologies like Machine Learning models, NLP chatbots, and predictive analytics into enterprise systems."
        },
        {
            q: "What tech stack do you use for web apps?",
            a: "We use modern tech stacks including React, Node.js, Next.js, Angular, Python (Django/Flask), and Cloud services like AWS and Azure."
        },
        {
            q: "How can I start a project with you?",
            a: "You can start a project by clicking the 'Get Free Consultation' button or contacting us at xenotrixtech@gmail.com."
        }
    ];

    // Load Presets
    presets.forEach(preset => {
        const btn = document.createElement('button');
        btn.className = 'preset-btn';
        btn.innerText = preset.q;
        btn.onclick = () => handlePresetClick(preset);
        presetsContainer.appendChild(btn);
    });

    // Toggle Chat Window
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('open');
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('open');
    });

    // Handle Preset Selection
    function handlePresetClick(preset) {
        // Add User Message
        appendMessage('user', preset.q);
        
        // Remove presets while typing
        presetsContainer.style.display = 'none';

        // Add Bot Typing Effect (Simulated Delay)
        setTimeout(() => {
            appendMessage('bot', preset.a);
            presetsContainer.style.display = 'flex'; // Show presets again
        }, 600);
    }

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;
        msgDiv.innerText = text;
        messagesContainer.appendChild(msgDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
