const providers = {
  xai: {
    label: "xAI",
    commands: [
      "pip install agentcrew-ai",
      "agentcrew xai-auth",
      "agentcrew chat --provider xai",
    ],
    note: "Device login for an eligible xAI plan. xAI controls allowances and billing — a displayed token cost of 0.0 does not mean the request is free.",
  },
  chatgpt: {
    label: "ChatGPT",
    commands: [
      "pip install agentcrew-ai",
      "agentcrew chatgpt-auth",
      "agentcrew chat --provider openai_codex",
    ],
    note: "For ChatGPT Plus or Pro. Uses Codex models through that subscription, with no separate API key.",
  },
  copilot: {
    label: "Copilot",
    commands: [
      "pip install agentcrew-ai",
      "agentcrew copilot-auth",
      "agentcrew chat --provider github_copilot",
    ],
    note: "For a GitHub Copilot subscription. No separate API key.",
  },
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const narrowNav = window.matchMedia("(max-width: 860px)");

function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!header || !toggle || !nav) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Menu";
    document.body.classList.toggle("nav-open", open);
  };

  const close = () => setMenu(false);

  toggle.addEventListener("click", () => {
    setMenu(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    close();
  });

  narrowNav.addEventListener("change", () => {
    if (!narrowNav.matches) close();
  });
}

function initQuickstart() {
  const tablist = document.querySelector(".tabs");
  const panel = document.querySelector("#qs-panel");
  const note = document.querySelector("#qs-note");
  const copyButton = document.querySelector("#copy-commands");
  const status = document.querySelector("#copy-status");
  if (!tablist || !panel || !note || !copyButton) return;

  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const codes = [...panel.querySelectorAll(".cmds code")];

  const select = (tab) => {
    const data = providers[tab.dataset.provider];
    if (!data) return;
    tabs.forEach((item) => {
      const on = item === tab;
      item.setAttribute("aria-selected", on ? "true" : "false");
      item.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", tab.id);
    data.commands.forEach((command, index) => {
      if (codes[index]) codes[index].textContent = command;
    });
    note.textContent = data.note;
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => select(tab));
  });

  tablist.addEventListener("keydown", (event) => {
    const current = tabs.indexOf(document.activeElement);
    if (current < 0) return;
    let next = null;
    if (event.key === "ArrowRight") next = tabs[(current + 1) % tabs.length];
    if (event.key === "ArrowLeft") next = tabs[(current - 1 + tabs.length) % tabs.length];
    if (event.key === "Home") next = tabs[0];
    if (event.key === "End") next = tabs[tabs.length - 1];
    if (!next) return;
    event.preventDefault();
    next.focus();
    select(next);
  });

  const commandText = () => codes.map((code) => code.textContent.trim()).join("\n");

  copyButton.addEventListener("click", async () => {
    const text = commandText();
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      copied = document.execCommand("copy");
      area.remove();
    }
    if (status) status.textContent = copied ? "Copied three commands." : "Could not copy. Select the commands instead.";
    const original = copyButton.textContent;
    copyButton.textContent = copied ? "Copied" : "Copy";
    window.setTimeout(() => {
      copyButton.textContent = original;
      if (status) status.textContent = "";
    }, 2000);
  });
}

function shownVideo(player) {
  const videos = [...player.querySelectorAll("video")];
  return videos.find((video) => getComputedStyle(video).display !== "none") || videos[0];
}

function arm(video) {
  if (!video || video.dataset.armed === "1") return;
  video.dataset.armed = "1";
  video.muted = true;
  video.playsInline = true;
  if (video.dataset.src && !video.getAttribute("src")) {
    video.src = video.dataset.src;
  }
}

function setToggle(player, playing) {
  const button = player.querySelector("[data-toggle]");
  const label = button?.querySelector("[data-label]");
  if (!button || !label) return;
  label.textContent = playing ? "Pause" : "Play";
  button.setAttribute("aria-pressed", playing ? "true" : "false");
}

function playVideo(player) {
  const video = shownVideo(player);
  if (!video) return;
  arm(video);
  player.querySelectorAll("video").forEach((other) => {
    if (other !== video) other.pause();
  });
  const started = video.play();
  if (started && typeof started.catch === "function") {
    started.catch(() => setToggle(player, false));
  }
}

function initPlayers() {
  const players = [...document.querySelectorAll("[data-player]")];
  if (!players.length) return;

  if (reduceMotion.matches) {
    document.querySelectorAll("video").forEach((video) => {
      video.removeAttribute("autoplay");
      video.pause();
    });
  }

  players.forEach((player) => {
    player.dataset.hold = "0";
    player.querySelectorAll("video").forEach((video) => {
      video.addEventListener("playing", () => setToggle(player, true));
      video.addEventListener("pause", () => setToggle(player, false));
    });
    const button = player.querySelector("[data-toggle]");
    button?.addEventListener("click", () => {
      const video = shownVideo(player);
      if (!video) return;
      if (video.paused) {
        player.dataset.hold = "0";
        playVideo(player);
      } else {
        player.dataset.hold = "1";
        video.pause();
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const player = entry.target;
        if (!(player instanceof HTMLElement)) return;
        if (entry.isIntersecting) {
          if (reduceMotion.matches || player.dataset.hold === "1") return;
          playVideo(player);
        } else {
          shownVideo(player)?.pause();
        }
      });
    },
    { threshold: 0.35, rootMargin: "80px 0px" },
  );

  players.forEach((player) => observer.observe(player));

  const onViewport = () => {
    players.forEach((player) => {
      player.querySelectorAll("video").forEach((video) => {
        if (getComputedStyle(video).display === "none") video.pause();
      });
    });
  };
  window.matchMedia("(max-width: 860px)").addEventListener("change", onViewport);
}

function initYear() {
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

initHeader();
initQuickstart();
initPlayers();
initYear();
