const screen = document.querySelector("#screen");
    const input = document.querySelector("#cmd");
    const form = document.querySelector("#terminal");
    const data = {
      help: "Available commands: help, about, skills, projects, contact, theme, clear",
      about: "Builder of useful web tools, automation scripts, and playful interfaces. This terminal is keyboard-first and stores no data.",
      skills: "Frontend: HTML, CSS, JavaScript, React. Backend: Python, Flask, APIs. Tools: Git, data visualization, local-first apps.",
      projects: ["app-lab-collection: ten small browser apps", "video-summarizer: extract notes from media", "web-checklists: structured checklist editor"].join("\\n"),
      contact: "Email: lucas.tarragomahiques@gmail.com\\nGitHub: https://github.com/lucas",
      theme: "Theme toggled. This command cycles between phosphor and amber."
    };
    let amber = false;
    const boot = [
      "RETRO PORTFOLIO OS v1.0",
      "Memory check: 640K OK",
      "Loading profile...",
      "Type 'help' and press Enter."
    ];
    function print(text, cls = "") {
      const p = document.createElement("p");
      p.className = `line ${cls}`;
      p.textContent = text;
      screen.appendChild(p);
      screen.scrollTop = screen.scrollHeight;
    }
    async function typeLine(text) {
      const p = document.createElement("p");
      p.className = "line";
      screen.appendChild(p);
      for (const ch of text) {
        p.textContent += ch;
        await new Promise(r => setTimeout(r, 16));
      }
      screen.scrollTop = screen.scrollHeight;
    }
    async function bootSequence() {
      for (const line of boot) await typeLine(line);
    }
    form.addEventListener("submit", event => {
      event.preventDefault();
      const raw = input.value.trim();
      if (!raw) return;
      print(`$ ${raw}`, "command");
      input.value = "";
      const cmd = raw.toLowerCase();
      if (cmd === "clear") screen.innerHTML = "";
      else if (cmd === "theme") {
        amber = !amber;
        document.documentElement.style.setProperty("--green", amber ? "#ffbf47" : "#47ff7a");
        document.documentElement.style.setProperty("--muted", amber ? "#b38c4a" : "#74a985");
        print(data.theme);
      } else print(data[cmd] || `Command not found: ${raw}. Try 'help'.`, data[cmd] ? "" : "muted");
    });
    bootSequence();

