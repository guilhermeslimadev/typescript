export const bootstrap = (): void => {
  interface Resume {
    fullName: string;
    email: string;
    skills: Skill[];
    addSkill?: (skill: Skill) => boolean;
  }

  interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  }

  const MyResume: Resume = {
    fullName: 'Guilherme',
    email: 'guilherme@gmail.com',
    skills: [
      { name: 'TypeScript', level: 'advanced' },
      { name: 'React', level: 'advanced' },
      { name: 'Node.js', level: 'intermediate' },
    ],
  };

  console.log(MyResume);
};
