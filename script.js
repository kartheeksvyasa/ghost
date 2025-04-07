document.getElementById('micButton').addEventListener('click', function() {
    // Play ghost sound effect
    const ghostSound = document.getElementById('ghostSound');
    ghostSound.play();

    // Initialize speech recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('response').innerText = `You said: ${transcript}`;
        respondToUser (transcript);
    };

    recognition.onerror = function(event) {
        console.error('Error occurred in recognition: ' + event.error);
    };
});

function respondToUser (userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    let ghostResponse = "banchoth bakchodhi math kar, baall lavadeke baaall...";

    // Simple keyword-based responses
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        ghostResponse = "Hello, mortal! What do you seek?";
    } else if (lowerCaseMessage.includes("who are you")) {
        ghostResponse = "I am a spirit from the beyond...";
    } else if (lowerCaseMessage.includes("help")) {
        ghostResponse = "Help is a tricky thing in the afterlife...";
    } else if (lowerCaseMessage.includes("scary") || lowerCaseMessage.includes("fear")) {
        ghostResponse = "Fear is what keeps the living awake at night...";
    } else if (lowerCaseMessage.includes("tell me a secret")) {
        ghostResponse = "The walls have ears, and they whisper your secrets...";
    } else if (lowerCaseMessage.includes("goodbye") || lowerCaseMessage.includes("bye")) {
        ghostResponse = "Until we meet again in the shadows...";
    } else if (lowerCaseMessage.includes("what is your name")) {
        ghostResponse = "I am known by many names, but you may call me the Whispering Shadow.";
    } else if (lowerCaseMessage.includes("are you real")) {
        ghostResponse = "Real is a matter of perspective... I exist in the shadows.";
    } else if (lowerCaseMessage.includes("show yourself")) {
        ghostResponse = "I am always here, lurking in the dark corners of your mind...";
    }

    // Display and speak the ghost's response
    document.getElementById('response').innerText += `\nGhost says: ${ghostResponse}`;

    // Speech synthesis
    const utterance = new SpeechSynthesisUtterance(ghostResponse);
    utterance.pitch = 1.5; // Adjust pitch for a ghostly effect
    utterance.rate = 0.9; // Slower speed for a more eerie effect
    utterance.voice = getGhostVoice(); // Get a ghostly voice
    window.speechSynthesis.speak(utterance);
}

function getGhostVoice() {
    const voices = window.speechSynthesis.getVoices();
    // You can choose a specific voice by name or characteristics
    // For example, you might want to select a voice that sounds more eerie
    return voices.find(voice => voice.name.includes('Google US English')) || voices[0]; // Fallback to the first voice
}

// Load voices when they are available
window.speechSynthesis.onvoiceschanged = function() {
    getGhostVoice();
};
