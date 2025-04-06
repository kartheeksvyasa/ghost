document.getElementById('micButton').addEventListener('click', function() {
    // This is a placeholder for the actual voice recognition functionality
    // In a real application, you would use the Web Speech API or a similar library

    // Simulate a ghost response
    const ghostResponses = [
        "Boo! Did you call me?",
        "I am here, listening...",
        "The spirits are restless tonight.",
        "Can you hear me?",
        "I have a message for you..."
    ];

    const randomResponse = ghostResponses[Math.floor(Math.random() * ghostResponses.length)];
    document.getElementById('response').innerText = randomResponse;
});
