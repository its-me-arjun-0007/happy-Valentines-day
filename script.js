// --- 1. BOOT SEQUENCE ANIMATION ---
function runAnimation() {
    const container = document.getElementById('bootContainer');
    const s1 = document.getElementById('scene1');
    const s2 = document.getElementById('scene2');
    const s3 = document.getElementById('scene3');
    const s4 = document.getElementById('scene4');

    // Start: Show "It's Valentine"
    if(s1) s1.style.display = 'block';
    
    setTimeout(() => {
        // Swap to "Hey Anna"
        if(s1) s1.style.display = 'none';
        if(s2) s2.style.display = 'block';
    }, 2500);

    setTimeout(() => {
        // Swap to Chatbox
        if(s2) s2.style.display = 'none';
        if(s3) s3.style.display = 'block';
        typeChatEffect(); 
    }, 5000);

    setTimeout(() => {
        // Swap to Story Lines
        if(s3) s3.style.display = 'none';
        if(s4) s4.style.display = 'block';
        playStoryLines();
    }, 9000);
}

function typeChatEffect() {
    const text = "Happy Valentine's Day!! Yeee! Love and blah blah...";
    const element = document.getElementById('chatText');
    if(!element) return;
    
    let i = 0;
    element.innerHTML = ""; 
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 50);
}

function playStoryLines() {
    const lines = document.querySelectorAll('.five p');
    let delay = 500;

    lines.forEach((line) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, delay);
        delay += 1500;
    });

    // Fade out and remove Boot Screen
    setTimeout(() => {
        const container = document.getElementById('bootContainer');
        if(container) {
            container.style.transition = 'opacity 1s';
            container.style.opacity = '0';
            setTimeout(() => { container.style.display = 'none'; }, 1000);
        }
    }, delay + 2000);
}

// --- 2. MAIN SITE TYPING EFFECT ---
function typeIntroText() {
    const textToType = "Hey Anna... ❤️";
    const element = document.getElementById("typingText");
    if(!element) return;
    
    let charIndex = 0;
    function type() {
        if (charIndex < textToType.length) {
            element.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        }
    }
    type();
}

// --- 3. CHAT MEMORIES ---
const chatData = [
    { sender: "Anna", text: "Hloooo... Hacker ano? 😁", type: "anna" },
    { sender: "Odiyan", text: "Annaakkil!", type: "odiyan" },
    { sender: "Anna", text: "Sherikkum hacker aano 🤯", type: "anna" },
    { sender: "Anna", text: "Insta hack cheyyuoo?", type: "anna" },
    { sender: "Anna", text: "Account paranju thanna hack cheth tharoo", type: "anna" },
    { sender: "Odiyan", text: "🤧", type: "odiyan" },
    { sender: "Odiyan", text: "Eppol oru call vanno?", type: "odiyan" },
    { sender: "Anna", text: "Aah", type: "anna" },
    { sender: "Anna", text: "Ente numberinn thanne ingot call vannu", type: "anna" },
    { sender: "Odiyan", text: "Just for a fun 😁", type: "odiyan" },
    { sender: "Anna", text: "Eda dushta hack cheythooo", type: "anna" },
    { sender: "Anna", text: "Verthe kalikkalle tto 🥲", type: "anna" },
    { sender: "Odiyan", text: "Thaan ante peru enthaanu seve aakkiyekkunne?", type: "odiyan" },
    { sender: "Anna", text: "Hacku 😁", type: "anna" },
    { sender: "Odiyan", text: "Okay bye 🥶", type: "odiyan" },
    { sender: "Anna", text: "Kummm", type: "anna" },
    { sender: "Odiyan", text: "Ummm", type: "odiyan" },
    { sender: "Anna", text: "Kummmm", type: "anna" },
    { sender: "Odiyan", text: "Ummmmmm", type: "odiyan" },
    { sender: "Anna", text: "Pooda. Njn nirthi🥺 poo minduual", type: "anna" },
    { sender: "Odiyan", text: "🥺", type: "odiyan" },
];

function loadChats() {
    const container = document.getElementById('chatContainer');
    if(!container) return;
    chatData.forEach(chat => {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${chat.type} fade-in`;
        bubble.innerHTML = `<strong>${chat.sender}:</strong> <br> ${chat.text}`;
        container.appendChild(bubble);
    });
}

// --- 4. LOVE LOGS (POEMS) ---
const poems = [
    { title: "The Two Loves", text: "There's this old Turkish saying: 'If you truly love someone, you love them twice.'\n\nThe first time is quick. It’s the butterflies.\n\nBut if you stay... That’s when the second love begins. The steady kind." },
    { title: "The Unrequited Love", text: "I know we will never be together, but please... allow me this much.\n\nLet me tell you how, in a sky crowded with stars, you remain the only moon I see." },
    { title: "The Soul's Attachment", text: "I can't stop loving you, nor is my soul expecting anyone.\n\nYour thoughts keep me tied to you constantly, just as my soul is attached to my body." },
    { title: "The Meaning of Beautiful", text: "I couldn't take my eyes off of you. I thought to myself, 'How can something so beautiful exist in this world?'" },
    { title: "Japanese Meaning", text: "In Japanese we say:\n\nIf no one notices you — I'll notice.\nIf no one appreciates you — I'll appreciate you.\nAnd if you don't need me — I will stay here waiting for you." },
    { title: "The Listener", text: "I’m not the talkative type... but that doesn’t mean I don’t enjoy our talks.\n\nI just love listening to you." },
    { title: "I Still Chose You", text: "I had so many paths to take, so many people I could have chosen. But out of all those options, I still chose you." },
    { title: "The Confession", text: "I need to confess I’m in love with you.\n\nI miss you when you’re gone." },
    { title: "Mahmoud Darwish Quotes", text: "'If you asked me how many times you came in my mind, I would say once. Because you came and never left.'" },
    { title: "Just Say Yes", text: "Just say yes and I will be your forever, holding your hand till my last breath." }
];

let currentPoemIndex = 0;
function renderPoem() {
    const poem = poems[currentPoemIndex];
    const contentDiv = document.getElementById('poemContent');
    const titleSpan = document.getElementById('poemTitle');
    const counterSpan = document.getElementById('poemCounter');
    
    if(!contentDiv) return;

    contentDiv.style.opacity = 0;
    setTimeout(() => {
        titleSpan.textContent = `log_${currentPoemIndex + 1}: ${poem.title}`;
        contentDiv.textContent = poem.text;
        counterSpan.textContent = `${currentPoemIndex + 1} / ${poems.length}`;
        contentDiv.style.opacity = 1;
    }, 200);
}
function changePoem(direction) {
    currentPoemIndex += direction;
    if (currentPoemIndex < 0) currentPoemIndex = poems.length - 1;
    if (currentPoemIndex >= poems.length) currentPoemIndex = 0;
    renderPoem();
}

// --- 5. SYSTEM UPTIME ---
function updateUptime() {
    const start = new Date(2022, 7, 16, 19, 9, 0); // Aug is month 7 (0-indexed)
    const now = new Date();
    const diff = now - start;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const element = document.getElementById("uptime");
    if (element) {
        element.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// --- 6. GROWING YES BUTTON LOGIC ---
let noClickCount = 0;

function rejectProposal() {
    noClickCount++;
    
    // 1. Make Yes Button Bigger
    const yesBtn = document.getElementById('yesBtn');
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    let newSize = currentSize * 1.5; // Grow by 50% each time
    yesBtn.style.fontSize = newSize + 'px';
    
    // 2. Change No Button Text (Pleading)
    const noBtn = document.getElementById('noBtn');
    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
        "Plsss? :( You're breaking my heart"
    ];
    
    if (noClickCount < phrases.length) {
        noBtn.innerText = phrases[noClickCount];
    } else {
        noBtn.innerText = phrases[phrases.length - 1];
    }
}

function acceptProposal() {
    document.getElementById('proposalQuestion').innerText = "Ok Yayyyyy!!! ❤️";
    document.querySelector('.buttons').style.display = 'none';
    
    // Add the Bear GIF
    const bearContainer = document.querySelector('.proposal-box');
    const bearImg = document.createElement('img');
    bearImg.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"; 
    bearImg.style.width = "150px";
    bearImg.style.marginTop = "20px";
    bearContainer.appendChild(bearImg);
    
    createHearts(); 
}

// --- 7. MUSIC & HEARTS ---
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;
if(musicBtn) {
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.textContent = "🎵 Play Music";
        } else {
            bgMusic.play();
            musicBtn.textContent = "⏸ Pause Music";
        }
        isPlaying = !isPlaying;
    });
}

function createHearts() {
    const container = document.getElementById('heartsContainer');
    if(!container) return;
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        heart.style.opacity = Math.random();
        container.appendChild(heart);
    }
}

// --- INITIALIZE EVERYTHING ---
window.addEventListener('load', () => {
    runAnimation();
    typeIntroText();
    loadChats();
    renderPoem();
    createHearts();
    
    setInterval(updateUptime, 1000);
    updateUptime();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
