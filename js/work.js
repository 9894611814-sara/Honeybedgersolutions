 
    const popup = document.getElementById("videoPopup");
    const popupVideo = document.getElementById("popupVideo");

    function isMobile() {
      return window.innerWidth <= 768;
    }

    document.querySelectorAll(".video-card").forEach(card => {
      const video = card.querySelector("video");

      card.addEventListener("click", () => {

        // 📱 MOBILE → play inline only
        if (isMobile()) {

          const btn = card.querySelector(".play-btn");

          // pause other videos
          document.querySelectorAll(".video-card").forEach(c => {
            const v = c.querySelector("video");
            const b = c.querySelector(".play-btn");

            if (v !== video) {
              v.pause();
              v.currentTime = 0;
              if (b) b.style.display = "block"; // show icon
            }
          });

          // toggle play/pause
          if (video.paused) {
            video.muted = false;
            video.play().catch(() => {
              video.muted = true;
              video.play();
            });

            if (btn) btn.style.display = "none"; // ✅ hide icon
          } else {
            video.pause();

            if (btn) btn.style.display = "block"; // ✅ show icon
          }

          return;
        }
        // 💻 DESKTOP → popup
        document.querySelectorAll(".video-card video").forEach(v => {
          v.pause();
          v.currentTime = 0;
        });

        popup.style.display = "flex";

        popupVideo.src = video.src;
        popupVideo.currentTime = 0;
        popupVideo.muted = false;

        popupVideo.play().catch(() => {
          popupVideo.muted = true;
          popupVideo.play();
        });
      });
    });

    // CLOSE POPUP
    popup.addEventListener("click", () => {
      popup.style.display = "none";
      popupVideo.pause();
      popupVideo.src = "";
    });

    const counters = document.querySelectorAll(".counter");

    const startCounting = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCount = () => {
          const speed = target / 100; // adjust speed here
          count += speed;

          if (count < target) {
            counter.childNodes[0].nodeValue = Math.floor(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.childNodes[0].nodeValue = target;
          }
        };

        updateCount();
      });
    };

    // trigger only when visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect(); // run only once
        }
      });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".stats-strip"));
