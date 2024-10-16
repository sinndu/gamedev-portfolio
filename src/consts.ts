import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Sindusara Munasinghe",
  DESCRIPTION: "My game development & design portfolio.",
  AUTHOR: "Sindusara Munasinghe",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "sindusara.m@queensu.ca",
    HREF: "mailto:sindusara.m@queensu.ca",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "sinndu",
    HREF: "https://github.com/sinndu"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "sindusara-munasinghe",
    HREF: "https://www.linkedin.com/in/sindusara-munasinghe/",
  },
]

