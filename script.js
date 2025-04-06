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
    const ghostResponses = [
        "Boo! Did you call me?",
        "I am here, listening...",
        "The spirits are restless tonight.",
        "Can you hear me?",
        "I have a message for you...",
        "Leave while you still can!",
        "I see you... and I want to play.",
        "Your time is running out..."
    ];

    const randomResponse = ghostResponses[Math.floor(Math.random() * ghostResponses.length)];
    document.getElementById('response').innerText += `\nGhost says: ${randomResponse}`;

    // Speech synthesis
    const utterance = new SpeechSynthesisUtterance(randomResponse);
    utterance.pitch = 1.2; // Adjust pitch for a ghostly effect
    utterance.rate = 1; // Normal speed
    window.speechSynthesis.speak(utterance);
}
