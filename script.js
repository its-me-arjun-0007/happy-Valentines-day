// 1. Typing Animation for Intro
const textToType = "Hey Anna... ❤️";
const typeSpeed = 100;
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        document.getElementById("typingText").textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typeSpeed);
    }
}

// 2. Curated Chat Memories (Real Data from Logs)
const chatData = [
    // Origin Story
    { sender: "Anna", text: "Hloooo... Hacker ano? 😁", type: "anna" },
    { sender: "Odiyan", text: "Annaakkil!", type: "odiyan" },
    { sender: "Anna", text: "Sherikkum hacker aano 🤯", type: "anna" },
    { sender: "Anna", text: "Insta hack cheyyuoo?", type: "anna" },
    { sender: "Anna", text: "Account paranju thanna hack cheth tharoo", type: "anna" },
    { sender: "Odiyan", text: "🤧", type: "odiyan" },
    
     // The Spoofing moment
    { sender: "Odiyan", text: "Eppol oru call vanno?", type: "odiyan" },
    { sender: "Anna", text: "Aah", type: "anna" },
    { sender: "Anna", text: "Ente numberinn thanne ingot call vannu", type: "anna" },
    { sender: "Odiyan", text: "Just for a fun 😁", type: "odiyan" },
    { sender: "Anna", text: "Eda dushta hack cheythooo", type: "anna" },
    { sender: "Anna", text: "Verthe kalikkalle tto 🥲", type: "anna" },
    { sender: "Anna", text: "Njn peedich pooyi ente numberinn enik call vannapo 😢", type: "anna" },
    { sender: "Anna", text: "Ente phone hack cheytho", type: "anna" },
    { sender: "Odiyan", text: "Eyy illa don't worry 😌", type: "odiyan" },
    
    // The Nickname moment
    { sender: "Odiyan", text: "Thaan ante peru enthaanu seve aakkiyekkunne?", type: "odiyan" },
    { sender: "Anna", text: "Hacku 😁", type: "anna" },
    { sender: "Odiyan", text: "Okay bye 🥶", type: "odiyan" },
    { sender: "Anna", text: "Ayy poovalle😁berthe oru resam", type: "anna" },
    { sender: "Odiyan", text: "Umm ok 😆", type: "odiyan" },
 
    // kumm Moment
    { sender: "Anna", text: "Aa", type: "anna" },
    { sender: "Odiyan", text: "Aah", type: "odiyan" },
    { sender: "Anna", text: "Mm", type: "anna" },
    { sender: "Odiyan", text: "Mmm", type: "odiyan" },
    { sender: "Anna", text: "Kumm", type: "anna" },
    { sender: "Odiyan", text: "Ummm", type: "odiyan" },
    { sender: "Anna", text: "Kummmm", type: "anna" },
    { sender: "Odiyan", text: "Ummmmmm", type: "odiyan" },
    { sender: "Anna", text: "Kummmmm", type: "anna" },
    { sender: "Odiyan", text: "Ummmmmmm", type: "odiyan" },
    { sender: "Anna", text: "Kummmmmm", type: "anna" },
    { sender: "Odiyan", text: "Okay bye", type: "odiyan" },
    { sender: "Anna", text: "Aysheri", type: "anna" },
    { sender: "Anna", text: "Pooda. Njn nirthi🥺 poo minduual", type: "anna" },
    { sender: "Odiyan", text: "🥺", type: "odiyan" },
];

function loadChats() {
    const container = document.getElementById('chatContainer');
    chatData.forEach(chat => {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${chat.type} fade-in`;
        bubble.innerHTML = `<strong>${chat.sender}:</strong> <br> ${chat.text}`;
        container.appendChild(bubble);
    });
}

// 3. Scroll Animation (Fade In)
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 4. Music Player Toggle
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

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

// 5. Generate Floating Hearts
function createHearts() {
    const container = document.getElementById('heartsContainer');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        heart.style.opacity = Math.random();
        container.appendChild(heart);
    }
}

// 6. Love Logs Data
const poems = [
    {
        title: "The Two Loves (Turkish Saying)",
        text: "There's this old Turkish saying: 'If you truly love someone, you love them twice.'\n\nThe first time is quick. It’s the butterflies. It’s the version of them that’s easy to love.\n\nBut time passes. The mask comes off. You start to notice the parts they hide. The anxiety. The trust issues. The silence that lasts too long.\n\nBut if you stay... If you still choose them, even after you’ve seen the mess. That’s when the second love begins. The steady kind. The 'I see you and I’m not going anywhere' kind."
    },
    {
        title: "The Unrequited Love",
        text: "I know we will never be together, but please... allow me this much.\n\nLet me tell you how, in a sky crowded with stars, you remain the only moon I see. How, among billions of faces in this world, it is only your eyes I ever search for.\n\nI know we will never be together, but please... allow me to love you aloud. Even if only once."
    },
    {
        title: "The Soul's Attachment",
        text: "I can't stop loving you, nor is my soul expecting anyone.\n\nYour thoughts keep me tied to you constantly, just as my soul is attached to my body.\n\nYou are not my fleeting thought. You are my entire existence."
    },
    {
        title: "The Meaning of Beautiful",
        text: "I couldn't take my eyes off of you. I thought to myself, 'How can something so beautiful exist in this world?'\n\nIt was like you reached in and stole my heart. There, in that moment, I first understood what the word 'beautiful' meant.\n\nSo I don't say beautiful or pretty... unless it comes from the heart."
    },
    {
        title: "Japanese Meaning of 'I'll Be With You'",
        text: "In English they say: 'I will always be with you.'\n\nBut in Japanese we say:\n\nIf no one notices you — I'll notice.\n\nIf no one pays attention — I'll pay attention.\n\nIf no one appreciates you — I'll appreciate you.\n\nIf no one is there for you — I'll be there for you.\n\nAnd also, if you don't need me — I will stay here waiting for you."
    },
    {
        title: "The Listener",
        text: "I’m not the talkative type... but that doesn’t mean I don’t enjoy our talks.\n\nI just love listening to you."
    },
    {
        title: "I Still Chose You",
        text: "If one day you never hear from me again, please remember this:\n\nI loved you with everything I had. I made you my priority in ways I never thought I could for someone.\n\nI had so many paths to take, so many people I could have chosen. But out of all those options, I still chose you."
    },
    {
        title: "The Confession",
        text: "I need to confess I’m in love with you.\n\nI miss you when you’re gone. And my heart keeps mentally preparing for the moment when you decide to move on.\n\nBecause for you, I’d be more sincere. I’d be the type of person who always shows up despite the fear. I’d do everything to make myself better just because I’m in love with you."
    },
    {
        title: "Mahmoud Darwish Quotes",
        text: "'If you asked me how many times you came in my mind, I would say once. Because you came and never left.'\n\n'All roads lead to you, even those I took to forget you.'\n\n'You are killing me, and you are keeping me from dying. That is love.'"
    },
    {
        title: "Just Say Yes",
        text: "Just say yes and I will be your forever, holding your hand till my last breath.\n\nMy love for you will never end as there will be nothing between us. And I'll crave your name in my heart forever."
    }
];

let currentPoemIndex = 0;

function renderPoem() {
    const poem = poems[currentPoemIndex];
    const contentDiv = document.getElementById('poemContent');
    const titleSpan = document.getElementById('poemTitle');
    const counterSpan = document.getElementById('poemCounter');

    // Fade out effect
    contentDiv.style.opacity = 0;
    
    setTimeout(() => {
        titleSpan.textContent = `log_${currentPoemIndex + 1}: ${poem.title}`;
        contentDiv.textContent = poem.text; // Uses white-space: pre-line CSS to handle \n
        counterSpan.textContent = `${currentPoemIndex + 1} / ${poems.length}`;
        
        // Fade in effect
        contentDiv.style.opacity = 1;
    }, 200);
}

function changePoem(direction) {
    currentPoemIndex += direction;
    
    // Loop navigation
    if (currentPoemIndex < 0) currentPoemIndex = poems.length - 1;
    if (currentPoemIndex >= poems.length) currentPoemIndex = 0;
    
    renderPoem();
}

// Initialize Everything
window.onload = () => {
    typeText();
    loadChats();
    renderPoem();
    createHearts();
    
    // Attach observer to all fade-in elements
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
};

function updateUptime() {
    const start = new Date("August 16, 2022 19:09:00").getTime();
    const now = new Date().getTime();
    const diff = now - start;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById("uptime").innerText = `${days}d ${hours}h`;
}
setInterval(updateUptime, 1000);

function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// NEW STORY ANIMATION SEQUENCE
function runBootSequence() {
    const seq = document.getElementById('bootSequence');
    
    // Step 1: Hey Anna
    setTimeout(() => { document.getElementById('step1').style.display = 'none'; document.getElementById('step2').style.display = 'block'; }, 2500);
    
    // Step 2: It's Valentine
    setTimeout(() => { document.getElementById('step2').style.display = 'none'; document.getElementById('step3').style.display = 'block'; }, 4500);
    
    // Step 3: Chatbox
    setTimeout(() => { document.getElementById('step3').style.display = 'none'; document.getElementById('step4').style.display = 'block'; playStep4(); }, 7500);
}

function playStep4() {
    const lines = ['.idea-1', '.idea-2', '.idea-3', '.idea-4', '.idea-5', '.idea-6'];
    let delay = 500;
    
    lines.forEach((selector) => {
        setTimeout(() => {
            const el = document.querySelector(selector);
            if(el) el.classList.add('visible');
        }, delay);
        delay += 1500; // Wait 1.5s between each line
    });

    // FINAL: Hide everything and show website
    setTimeout(() => {
        const boot = document.getElementById('bootSequence');
        boot.style.opacity = '0';
        setTimeout(() => { boot.style.display = 'none'; }, 1000);
    }, delay + 1000);
}

// Start animation on load
window.addEventListener('load', runBootSequence);

