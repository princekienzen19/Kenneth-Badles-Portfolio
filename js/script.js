document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Cursor Position: (${x}, ${y})`);
});