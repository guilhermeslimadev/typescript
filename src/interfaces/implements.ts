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

  interface Resume {
    dateOfBirth?: Date;
    sumary?: string;
  }

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLength = this.skills.length;
      this.skills.push(skill);
      return this.skills.length > initialLength;
    }
  }

  const myResume = new MyResume('Guilherme', 'guilherme@gmail.com', [
    { name: 'TypeScript', level: 'advanced' },
    { name: 'React', level: 'advanced' },
    { name: 'Node.js', level: 'intermediate' },
  ]);

  myResume.addSkill({ name: 'Python', level: 'beginner' });

  console.log(myResume);

  /*const MyResume: Resume = {
    fullName: 'Guilherme',
    email: 'guilherme@gmail.com',
    skills: [
      { name: 'TypeScript', level: 'advanced' },
      { name: 'React', level: 'advanced' },
      { name: 'Node.js', level: 'intermediate' },
    ],
  };*/

  //console.log(MyResume);
};
