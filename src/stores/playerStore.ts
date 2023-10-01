import { create } from 'zustand';

interface PlayerState {
  playerName: string;
  setPlayerName: (playerName: string) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  playerName: '',
  setPlayerName: (playerName) => set({ playerName }),
}));
