"use client";

import { createContext, useContext } from "react";

const QuestionsIdContext = createContext<string | undefined>(undefined);

export function useQuestionsId() {
  return useContext(QuestionsIdContext);
}

interface QuestionsIdProviderProps {
  id: string;
  children: React.ReactNode;
}

export default function QuestionsIdProvider({
  id,
  children,
}: QuestionsIdProviderProps) {
  return (
    <QuestionsIdContext.Provider value={id}>
      {children}
    </QuestionsIdContext.Provider>
  );
}
