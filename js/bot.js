function randomReply(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const botKnowledge = [
    {
        keywords: ['park', 'parking', 'places', 'available'],
        replies: [
            "You can find available parking spots on our interactive map.",
            "Try checking the nearest mall for parking availability.",
            "Our smart map shows all nearby available parking zones!"
        ]
    },
    {
        keywords: ['price', 'cost', 'how much', 'fee', 'pricing'],
        replies: [
            "Our parking rates vary by location and time. Check the spot to see specific rates.",
            "Usually, it's between $1-5/hour depending on the zone.",
            "We offer flexible plans to suit your needs!. check our pricing strategy"
        ]
    },
    {
        keywords: ['help', 'assist', 'support'],
        replies: [
            "I can help you find spots, show prices, or answer questions. What would you like?",
            "I'm here for anything related to parking. Just ask!",
            "Need help using the system? I got you!"
        ]
    },
    {
        keywords: ['reservation', 'book', 'hiring'],
        replies: [
            "Yes, you can reserve your parking spot in advance through our website.",
            "We offer the option to book your parking spot ahead of time."
        ]
    },
    {
        keywords: ['payment', 'pay', 'card', 'transaction'],
        replies: [
            "Yes, you can pay online through various payment options available on the website.",
            "We accept all major credit cards, PayPal, and more."
        ]
    },
    {
        keywords: ['location', 'where', 'find'],
        replies: [
            "We have multiple parking locations available. You can check the available spots on our interactive map.",
            "Our parking spots are scattered across the city. Just look at the map to see what's nearby."
        ]
    },
    {
        keywords: ['discount', 'offer', 'promotion'],
        replies: [
            "We offer discounts for regular users. Check out our payment page for the latest offers!",
            "We have limited-time offers on parking rates. Be sure to check the discounts available now!"
        ]
    },
    {
        keywords: ['modify', 'edit', 'change'],
        replies: [
            "You can modify your booking through your account on our website before the scheduled time.",
            "Need to make changes to your reservation? No worries, you can edit it easily."
        ]
    },
    {
        keywords: ['accessibility', 'disabled', 'wheelchair'],
        replies: [
            "We have dedicated parking spaces for disabled drivers. You can view them on our parking map.",
            "Our system includes parking spots that are designed for accessibility."
        ]
    },
    {
        keywords: ['thank you', 'thanks', 'thank', 'grateful'],
        replies: [
            "You're welcome! I'm happy to help.",
            "Glad I could assist you! Let me know if you need anything else.",
            "You're welcome! Don't hesitate to ask if you need more help."
        ]
    },
    {
        keywords: ['hi', 'hello', 'hey'],
        replies: [
            "Hello! How can I help you today?",
            "Hi there! Need a parking spot?",
            "Hey! Looking for a place to park?"
        ]
    }
];

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();

    for (const entry of botKnowledge) {
        if (entry.keywords.some(word => lowerMsg.includes(word))) {
            return randomReply(entry.replies);
        }
    }

    const fallbackReplies = [
        "I'm not sure I understand. Could you rephrase?",
        "Try asking about parking spots, prices, or help.",
        "Hmm... I'm still learning! Maybe try something else?"
    ];

    return randomReply(fallbackReplies);
}

function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';

    if (chatContainer.style.display === 'block') {
        addBotMessage("Hello! How can I help you with parking today?");
    }
}

function addBotMessage(message) {
    const chatBody = document.getElementById('chatBody');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'mb-3';
    msgDiv.innerHTML = `
        <div class="d-flex align-items-center mb-2">
            <i class="fas fa-robot me-2"></i>
            <small class="text-muted">Bot</small>
        </div>
        <div class="bg-light p-3 rounded">
            ${message}
        </div>
    `;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function addUserMessage(message) {
    const chatBody = document.getElementById('chatBody');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'mb-3 text-end';
    msgDiv.innerHTML = `
        <div class="d-flex align-items-center justify-content-end mb-2">
            <small class="text-muted">You</small>
            <i class="fas fa-user ms-2"></i>
        </div>
        <div class="bg-primary text-white p-3 rounded">
            ${message}
        </div>
    `;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message) {
        addUserMessage(message);
        userInput.value = '';
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addBotMessage(botResponse);
            }, 1000); 
        }
    }

// Enter key support
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
