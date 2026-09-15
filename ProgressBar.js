function startProgress() {
    const bar = document.querySelector('.progress-bar');
    let progress = 0;
  
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
      } else {
        progress += 1;
  
        // Map progress (0–100) to translateX (-100% to 0%)
        const translateValue = -100 + progress;
        bar.style.transform = `translateX(${translateValue}%)`;
      }
    }, 50); // Fast updates
  }
