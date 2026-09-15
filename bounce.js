// requestAnimationFrame(bounce)   // start

// Frame 1:
//   browser calls bounce(time)
//   bounce updates position
//   bounce requests next frame

// Frame 2:
//   browser calls bounce(time)
//   bounce updates position
//   bounce requests next frame

// Frame 3:
//   browser calls bounce(time)
//   ...
// The first requestAnimationFrame starts the animation, and the one inside the function keeps it running frame by frame.”


const ballElement = document.getElementById("ballId");

const top = 0;
const bottom = 270;

let currentPos = 0;
let direction = 1;           // 1 = down, -1 = up
const speed = 300;           // pixels per second

let prevTime = 0;

function bounce(currentTime) {
  if (!prevTime) prevTime = currentTime;

  const deltaTime = (currentTime - prevTime) / 1000;
  prevTime = currentTime;

  // Move ball based on time
  currentPos += direction * speed * deltaTime;

  // Bounce logic
  if (currentPos >= bottom) {
    currentPos = bottom;
    direction = -1;
  } else if (currentPos <= top) {
    currentPos = top;
    direction = 1;
  }

  ballElement.style.transform = `translateY(${currentPos}px)`;
  requestAnimationFrame(bounce);
}

requestAnimationFrame(bounce);



// Think of a frame like a single snapshot in a movie.

// Browsers render the screen many times per second (usually ~60 frames per second, fps).

// Each frame, the browser:

// Paints the screen

// Updates styles, layout, and animation

// Handles user input

// Frame ≈ 16.7ms (1000ms / 60fps)

// So a “frame” is one cycle of updating what the user sees.

// requestAnimationFrame (rAF) is a browser API for smooth animations:

// You give it a function (bounce in your case)

// Browser calls your function before the next repaint

// Passes the current timestamp (high-res time)


// Frames don’t always happen exactly at 60fps:

// Sometimes frames take 16ms (perfect 60fps)

// Sometimes frames take 20ms, 30ms, or even more (browser busy, CPU lag)

// If we just updated position by fixed pixels per frame, like:

// currentPos += direction * speed; // WRONG


// The ball would move faster on slow frames

// Or slower on fast frames

// Animation would jerk or stutter


// Browser rendering pipeline

// Browser has to:

// Recalculate styles (CSS)

// Recalculate layout (DOM)

// Paint pixels to the screen

// Run your JS callbacks (requestAnimationFrame)

// CPU & GPU speed

// If your JS code is heavy (loops, DOM updates)

// If the page has large images, animations, or many DOM nodes

// Other processes on the computer

// Other tabs, OS tasks, GPU load

// Monitor refresh rate

// On a 60Hz monitor, max frames = 60fps

// On a 144Hz monitor, max frames = 144fps

// If the browser can’t keep up → actual frame < target fps

// If you call heavyTask inside requestAnimationFrame, that frame might take 50ms

// Next frame only starts after your task and browser finishes painting → deltaTime = 50ms, not 16.7ms

// 4. How requestAnimationFrame handles this

// Browser passes currentTime → exact timestamp when the frame is being painted

// Target: 60fps (~16.7ms per frame)

// Frame 1: works fine → deltaTime ≈ 16.7ms
// Frame 2: browser busy → deltaTime = 25ms
// Frame 3: small pause → deltaTime = 20ms

// Ball moves: speed * deltaTime
// The distance per frame changes, but distance per second remains constant → smooth motion