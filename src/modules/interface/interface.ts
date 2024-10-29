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
    fullName: 'Jorge Sant Ana',
    email: 'jorge@argus-academy.com',
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
    ],
  };

  console.log(MyResume);
};
