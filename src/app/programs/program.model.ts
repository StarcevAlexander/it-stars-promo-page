export interface LearningModule {
  id: number;
  name: string;
  descriptionMin: string;
  descriptionMax?: string;
  totalClasses: number;
  totalDuration: string;
  image: string;
}

export interface ProgramsData {
  learningModules: LearningModule[];
}
