const body = document.body;

const projectMeta = {
    "project1.html": {
        category: "Featured Game",
        summary: "A Unity platformer built around body-shifting traversal, readable challenge design, and a playful mechanic that carries the theme.",
        tags: ["Unity", "Gameplay Systems", "Level Design"]
    },
    "project2.html": {
        category: "Featured Game",
        summary: "A custom-engine action adventure mixing Metroidvania progression, dark historical world-building, and technical collaboration close to the design process.",
        tags: ["Custom Engine", "Narrative Design", "Combat Flow"]
    },
    "project3.html": {
        category: "Featured Game",
        summary: "An Unreal-based interactive driving narrative focused on crash reconstruction, scene reading, and emotional pacing.",
        tags: ["Unreal Engine", "Interactive Narrative", "Cinematics"]
    },
    "game-project1.html": {
        category: "Game Project",
        summary: "A VR library experience that turns reading, discovery, and exhibition interaction into an explorable digital space.",
        tags: ["VR", "Interaction Design", "Spatial UX"]
    },
    "game-project2.html": {
        category: "Game Project",
        summary: "A Sengoku-era action adventure built around puzzle flow, chase pressure, and clean player guidance.",
        tags: ["Action Adventure", "Puzzle Design", "Exploration"]
    },
    "software-project1.html": {
        category: "Software Project",
        summary: "A Java information management system that brings structured logic, GUI workflow, and transport operations into one product.",
        tags: ["Java", "GUI", "System Design"]
    },
    "software-project2.html": {
        category: "Software Project",
        summary: "A handwriting recognition pipeline combining image preprocessing, neural inference, and practical multimodal output.",
        tags: ["Python", "Computer Vision", "Deep Learning"]
    },
    "software-project3.html": {
        category: "Software Project",
        summary: "An Android note-taking app focused on clarity, efficiency, and everyday task management with lightweight interaction.",
        tags: ["Android", "Mobile UI", "Product Design"]
    },
    "research-project1.html": {
        category: "Research",
        summary: "A health-tech concept for non-invasive blood pressure monitoring through PPG sensing, LSTM modeling, and mobile feedback.",
        tags: ["Health Tech", "LSTM", "Device Workflow"]
    },
    "research-project2.html": {
        category: "Research",
        summary: "A character-generation workflow using Stable Diffusion and THA3 to make animated virtual avatars faster and more accessible.",
        tags: ["Generative AI", "Avatar Pipeline", "Character Tools"]
    },
    "research-project3.html": {
        category: "Research",
        summary: "A mathematical modeling project for classifying ancient glass artifacts through composition analysis and predictive clustering.",
        tags: ["Data Modeling", "Statistics", "Cultural Heritage"]
    },
    "video-project1.html": {
        category: "Video Project",
        summary: "A crime drama short driven by power shifts, revenge, and careful cinematic staging.",
        tags: ["Film Direction", "Editing", "Storytelling"]
    },
    "video-project2.html": {
        category: "Video Project",
        summary: "A research-led presentation translating employment data into a clean public-facing video narrative.",
        tags: ["Research Video", "Data Storytelling", "Presentation"]
    },
    "video-project3.html": {
        category: "Video Project",
        summary: "A history-focused video combining archival structure, narration, and editorial sequencing.",
        tags: ["Historical Narrative", "Editing", "Visual Research"]
    },
    "video-project4.html": {
        category: "Video Project",
        summary: "A psychological drama using satire and cultural reference to explore social pressure and involution.",
        tags: ["Drama", "Screenwriting", "Social Commentary"]
    },
    "photography-project1.html": {
        category: "Photography",
        summary: "A DSLR collection centered on atmosphere, architecture, and patient environmental framing.",
        tags: ["Photography", "Composition", "Architecture"]
    },
    "photography-project2.html": {
        category: "Photography",
        summary: "Aerial landscape work built around scale, terrain rhythm, and wide-environment composition.",
        tags: ["Drone", "Landscape", "Aerial Framing"]
    },
    "photography-project3.html": {
        category: "Photography",
        summary: "A tighter frame-study collection focused on mood, contrast, and visual composition.",
        tags: ["Mood Study", "Composition", "Visual Direction"]
    },
    "volunteer-project1.html": {
        category: "Community",
        summary: "Visual documentation and event support work shaped by reliability, coordination, and communication.",
        tags: ["Operations", "Photography", "Event Support"]
    },
    "volunteer-project2.html": {
        category: "Community",
        summary: "Interactive science teaching designed to turn abstract concepts into energetic hands-on learning.",
        tags: ["Teaching", "Workshop Design", "Facilitation"]
    },
    "volunteer-project3.html": {
        category: "Community",
        summary: "A campus library service role focused on student experience, programming, and inclusive cultural activity.",
        tags: ["Service Design", "Programming", "Community"]
    },
    "volunteer-project4.html": {
        category: "Community",
        summary: "Local volunteer work centered on public service, patrol support, and visible community participation.",
        tags: ["Public Service", "Coordination", "Field Work"]
    },
    "award-project1.html": {
        category: "Award",
        summary: "Competition recognition for translating graduate employment research into a strong digital media presentation.",
        tags: ["Award", "Competition", "Research Communication"]
    },
    "award-project2.html": {
        category: "Award",
        summary: "Challenge Cup recognition tied to research, presentation clarity, and policy-facing communication.",
        tags: ["Award", "Policy Research", "Presentation"]
    },
    "award-project3.html": {
        category: "Award",
        summary: "An interdisciplinary international project linking technical investigation, teamwork, and presentation quality.",
        tags: ["Innovation", "Teamwork", "International Program"]
    }
};

function setMenuState(isOpen) {
    const menuToggle = document.querySelector("[data-menu-toggle]");
    const siteNav = document.querySelector("[data-site-nav]");

    if (!menuToggle || !siteNav) {
        return;
    }

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    siteNav.dataset.open = String(isOpen);
    body.classList.toggle("menu-open", isOpen);
}

function initMobileMenu() {
    const menuToggle = document.querySelector("[data-menu-toggle]");
    const siteNav = document.querySelector("[data-site-nav]");

    if (!menuToggle || !siteNav) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuState(!isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            setMenuState(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuState(false);
        }
    });
}

function initTabs() {
    const tabGroups = document.querySelectorAll("[data-tab-group]");

    tabGroups.forEach((group) => {
        const buttons = group.querySelectorAll("[data-tab-target]");
        const panels = group.querySelectorAll("[data-tab-panel]");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const target = button.dataset.tabTarget;

                buttons.forEach((item) => {
                    const active = item === button;
                    item.classList.toggle("is-active", active);
                    item.setAttribute("aria-selected", String(active));
                });

                panels.forEach((panel) => {
                    panel.hidden = panel.dataset.tabPanel !== target;
                });
            });
        });
    });

    const legacyButtons = document.querySelectorAll(".tab-button[data-target]");
    const legacyPanels = document.querySelectorAll(".tab-content");

    legacyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.target;

            legacyButtons.forEach((item) => item.classList.toggle("active", item === button));
            legacyPanels.forEach((panel) => {
                panel.style.display = panel.id === target ? "block" : "none";
            });
        });
    });
}

function initBackToTop() {
    const backToTop = document.querySelector("[data-back-to-top]") || document.querySelector("#back-to-top button");

    if (!backToTop) {
        return;
    }

    const syncVisibility = () => {
        backToTop.classList.toggle("is-visible", window.scrollY > 420);
    };

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", syncVisibility, { passive: true });
    syncVisibility();
}

function initModernLightbox() {
    const lightbox = document.querySelector("[data-lightbox]");
    const lightboxImage = document.querySelector("[data-lightbox-image]");
    const lightboxCaption = document.querySelector("[data-lightbox-caption]");
    const closeButton = document.querySelector("[data-lightbox-close]");

    if (!lightbox || !lightboxImage || !closeButton) {
        return;
    }

    const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        lightboxImage.removeAttribute("src");
        lightboxImage.removeAttribute("alt");
        if (lightboxCaption) {
            lightboxCaption.textContent = "";
        }
        body.classList.remove("lightbox-open");
    };

    document.querySelectorAll("[data-lightbox-trigger]").forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.getAttribute("src") || "";
            lightboxImage.alt = image.getAttribute("alt") || "";
            if (lightboxCaption) {
                lightboxCaption.textContent = image.dataset.caption || image.getAttribute("alt") || "";
            }
            lightbox.classList.add("is-open");
            body.classList.add("lightbox-open");
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });
}

function initLegacyLightbox() {
    const legacyModal = document.getElementById("imageModal");
    const legacyImage = document.getElementById("modalImage");

    if (!legacyModal || !legacyImage) {
        return;
    }

    const closeLegacyModal = () => {
        legacyModal.style.display = "none";
        body.classList.remove("lightbox-open");
    };

    const openLegacyModal = (image) => {
        legacyImage.src = image.getAttribute("src") || "";
        legacyImage.alt = image.getAttribute("alt") || "";
        legacyModal.style.display = "flex";
        body.classList.add("lightbox-open");
    };

    document.querySelectorAll(".image-gallery img").forEach((image) => {
        image.addEventListener("click", () => openLegacyModal(image));
    });

    const closeButton = legacyModal.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", closeLegacyModal);
    }

    legacyModal.addEventListener("click", (event) => {
        if (event.target === legacyModal) {
            closeLegacyModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLegacyModal();
        }
    });

    window.openModal = openLegacyModal;
    window.closeModal = closeLegacyModal;
}

function initExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
        rel.add("noopener");
        rel.add("noreferrer");
        link.setAttribute("rel", [...rel].join(" "));
    });
}

function buildMetric(label, value) {
    const item = document.createElement("div");
    item.className = "project-metric";
    item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    return item;
}

function enhanceProjectPage() {
    const path = window.location.pathname.replace(/\\/g, "/");
    if (!path.includes("/projects/")) {
        return;
    }

    const fileName = path.split("/").pop();
    const meta = projectMeta[fileName] || {
        category: "Project",
        summary: "A selected project from Yibo Wang's portfolio.",
        tags: ["Portfolio"]
    };

    body.classList.add("project-page");

    const header = document.querySelector("header");
    const firstSection = document.querySelector("main section, section");
    const pageTitle = document.querySelector(".logo");
    const footer = document.querySelector("footer");
    if (!header || !firstSection || !pageTitle || !footer) {
        return;
    }

    const cleanTitle = pageTitle.textContent.replace(/\s*-\s*Details\s*$/i, "").trim();
    pageTitle.textContent = cleanTitle;
    document.title = `${cleanTitle} | Yibo Wang`;

    const sections = [...document.querySelectorAll("section.section")];
    const galleryCount = document.querySelectorAll(".image-gallery img").length;
    const hasVideo = Boolean(document.querySelector("iframe"));
    const resourceCount = document.querySelectorAll('#project-code a[href^="http"]').length;

    const hero = document.createElement("section");
    hero.className = "project-hero";
    hero.innerHTML = `
        <div class="container">
            <div class="project-hero-card">
                <div class="project-hero-copy">
                    <p class="project-kicker">${meta.category}</p>
                    <h1>${cleanTitle}</h1>
                    <p class="project-summary">${meta.summary}</p>
                    <div class="project-tag-row">
                        ${meta.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                    </div>
                    <div class="project-action-row">
                        <a class="project-pill" href="../index.html#featured">Back to featured work</a>
                        <a class="project-pill" href="../index.html#archive">Browse archive</a>
                    </div>
                </div>
                <div class="project-metric-grid">
                    ${buildMetric("Gallery", `${galleryCount} frames`).outerHTML}
                    ${buildMetric("Video", hasVideo ? "Included" : "Not included").outerHTML}
                    ${buildMetric("Links", resourceCount ? `${resourceCount} resources` : "No public repo").outerHTML}
                    ${buildMetric("Focus", meta.tags[0] || meta.category).outerHTML}
                </div>
            </div>
        </div>
    `;

    header.insertAdjacentElement("afterend", hero);

    sections.forEach((section, index) => {
        const container = section.querySelector(".container");
        const heading = section.querySelector("h2");
        if (!container || !heading) {
            return;
        }

        section.classList.add("case-section");
        container.classList.add("case-card");

        const label = document.createElement("p");
        label.className = "case-label";
        label.textContent = `${String(index + 1).padStart(2, "0")} / ${heading.textContent}`;
        container.insertBefore(label, heading);

        if (section.querySelector(".image-gallery")) {
            section.classList.add("case-section-gallery");
        }
        if (section.querySelector("iframe")) {
            section.classList.add("case-section-video");
        }
        if (section.id === "project-code") {
            section.classList.add("case-section-resources");
            container.querySelectorAll('a[href^="http"]').forEach((link) => {
                link.classList.add("resource-link");
            });
        }
    });

    document.querySelectorAll(".image-gallery").forEach((gallery) => {
        gallery.classList.add("enhanced-gallery");
        gallery.querySelectorAll("img").forEach((image, index) => {
            if (image.closest("figure")) {
                return;
            }
            const figure = document.createElement("figure");
            figure.className = "gallery-card";
            const caption = document.createElement("figcaption");
            caption.textContent = image.alt && !/^image\s+\d+$/i.test(image.alt)
                ? image.alt
                : `${cleanTitle} frame ${String(index + 1).padStart(2, "0")}`;
            image.parentNode.insertBefore(figure, image);
            figure.appendChild(image);
            figure.appendChild(caption);
        });
    });

    footer.classList.add("project-footer");
}

initMobileMenu();
initTabs();
initBackToTop();
initModernLightbox();
initLegacyLightbox();
initExternalLinks();
enhanceProjectPage();
