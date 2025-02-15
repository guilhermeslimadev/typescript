interface PersonalInfo {
  /**
   *nome completo
   */
  fullName: string;
  email: string;
  dateOfBirth?: Date;
  sumary?: string;
}

/**
 *interface utilizada para criação de curriculos
 */
interface Resume extends PersonalInfo, Theme {
  skills: Skill[];
  addSkill?: (skill: Skill) => boolean;
}

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Theme {
  font: Font;
  background: Background;
  layout: Layout;
}
