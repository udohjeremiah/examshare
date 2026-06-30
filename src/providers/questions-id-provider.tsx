"use client";

import { createContext, useContext } from "react";

const QuestionsIdContext = createContext<string | undefined>(undefined);

interface QuestionsIdProviderProperties {
  children: React.ReactNode;
  id: string;
}

export function QuestionsIdProvider({
  children,
  id,
}: QuestionsIdProviderProperties) {
  return (
    <QuestionsIdContext.Provider value={id}>
      {children}
    </QuestionsIdContext.Provider>
  );
}

export function useQuestionsId() {
  return useContext(QuestionsIdContext);
}
