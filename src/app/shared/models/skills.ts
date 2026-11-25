export type Skill = {
  image: string;
  name: string;
};

export type SkillGroup = {
  titleKey:
  | 'skills.group.frontend'
  | 'skills.group.backend'
  | 'skills.group.data'
  | 'skills.group.quality'
    | 'skills.group.cloud'
    | 'skills.group.tools'
    | 'skills.group.ai'
    | 'skills.group.languages';
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skills.group.frontend',
    skills: [
      { image: 'assets/skills/angular.svg', name: 'Angular' },
      { image: 'assets/skills/react.svg', name: 'React' },
      { image: 'assets/skills/typescript.svg', name: 'TypeScript' },
      { image: 'assets/skills/javascript.svg', name: 'JavaScript' },
      { image: 'assets/skills/html5.svg', name: 'HTML5' },
      { image: 'assets/skills/css3.svg', name: 'CSS3' },
      { image: 'assets/skills/sass.svg', name: 'Sass / SCSS' },
      { image: 'assets/skills/tailwindcss.svg', name: 'Tailwind CSS' },
      { image: 'assets/skills/jquery.svg', name: 'jQuery' },
      { image: 'assets/skills/rxjs.svg', name: 'RxJS' }
    ]
  },
  {
    titleKey: 'skills.group.backend',
    skills: [
      { image: 'assets/skills/nodejs.svg', name: 'Node.js' },
      { image: 'assets/skills/nestjs.svg', name: 'NestJS' },
      { image: 'assets/skills/express.svg', name: 'Express.js' },
      { image: 'assets/skills/csharp.svg', name: 'C# / .NET' },
      { image: 'assets/skills/blazor.svg', name: 'Blazor' },
      { image: 'assets/skills/java.svg', name: 'Java' },
      { image: 'assets/skills/spring.svg', name: 'Spring Boot' },
      { image: 'assets/skills/jwt.svg', name: 'JWT' }
    ]
  },
  {
    titleKey: 'skills.group.data',
    skills: [
      { image: 'assets/skills/postgresql.svg', name: 'PostgreSQL' },
      { image: 'assets/skills/mysql.svg', name: 'MySQL' },
      { image: 'assets/skills/mongodb.svg', name: 'MongoDB' },
      { image: 'assets/skills/graphql.svg', name: 'GraphQL' }
    ]
  },
  {
    titleKey: 'skills.group.quality',
    skills: [
      { image: 'assets/skills/vitest.svg', name: 'Vitest' },
      { image: 'assets/skills/playwright.svg', name: 'Playwright' },
      { image: 'assets/skills/jasmine.svg', name: 'Jasmine' },
      { image: 'assets/skills/cypress.svg', name: 'Cypress' },
      { image: 'assets/skills/sonarqube.svg', name: 'SonarQube' },
      { image: 'assets/skills/postman.svg', name: 'Postman' },
      { image: 'assets/skills/eslint.svg', name: 'ESLint' },
      { image: 'assets/skills/karma.svg', name: 'Karma' }
    ]
  },
  {
    titleKey: 'skills.group.cloud',
    skills: [
      { image: 'assets/skills/aws.svg', name: 'AWS' },
      { image: 'assets/skills/azure.svg', name: 'Azure' },
      { image: 'assets/skills/linux.svg', name: 'Linux' },
      { image: 'assets/skills/firebase.svg', name: 'Firebase' },
      { image: 'assets/skills/docker.svg', name: 'Docker' },
      { image: 'assets/skills/github-actions.svg', name: 'GitHub Actions' },
      { image: 'assets/skills/jenkins.svg', name: 'Jenkins' },
      { image: 'assets/skills/heroku.svg', name: 'Heroku' },
      { image: 'assets/skills/netlify.svg', name: 'Netlify' },
      { image: 'assets/skills/vercel.svg', name: 'Vercel' }
    ]
  },
  {
    titleKey: 'skills.group.tools',
    skills: [
      { image: 'assets/skills/git.svg', name: 'Git' },
      { image: 'assets/skills/github.svg', name: 'GitHub' },
      { image: 'assets/skills/vscode.svg', name: 'Visual Studio Code' },
      { image: 'assets/skills/vitejs.svg', name: 'Vite' }
    ]
  },
  {
    titleKey: 'skills.group.languages',
    skills: [
      { image: 'assets/skills/c.svg', name: 'C' },
      { image: 'assets/skills/cplusplus.svg', name: 'C++' }
    ]
  },
  {
    titleKey: 'skills.group.ai',
    skills: [
      { image: 'assets/skills/codex.svg', name: 'OpenAI Codex' },
      { image: 'assets/skills/claudecode.svg', name: 'Claude Code' },
      { image: 'assets/skills/gemini.svg', name: 'Gemini' },
      { image: 'assets/skills/githubcopilot.svg', name: 'GitHub Copilot' }
    ]
  }
];
