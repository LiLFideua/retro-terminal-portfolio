export type AppCategory = 'portfolio';

export interface ProjectManifest {
  name: string;
  title: string;
  category: AppCategory;
  description: string;
  languages: string[];
  entrypoints: {
    html: string;
    css: string;
    javascript: string;
  };
}

export const projectManifest: ProjectManifest = {
  name: 'retro-terminal-portfolio',
  title: 'Retro Terminal Portfolio',
  category: 'portfolio',
  description: 'A keyboard-first personal portfolio styled as a polished terminal interface.',
  languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'JSON', 'Markdown'],
  entrypoints: {
    html: 'index.html',
    css: 'assets/styles.css',
    javascript: 'assets/app.js'
  }
};
