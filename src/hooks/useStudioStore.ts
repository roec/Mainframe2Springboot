import { create } from 'zustand';

type StudioState = {
  selectedArtifactId: string;
  selectedFileKey: string;
  setArtifact: (id: string) => void;
  setFile: (key: string) => void;
};

export const useStudioStore = create<StudioState>((set) => ({
  selectedArtifactId: 'cobol',
  selectedFileKey: 'CustomerController.java',
  setArtifact: (selectedArtifactId) => set({ selectedArtifactId }),
  setFile: (selectedFileKey) => set({ selectedFileKey }),
}));
