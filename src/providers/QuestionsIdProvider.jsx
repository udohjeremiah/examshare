"use client";

import { createContext, useContext } from "react";

const QuestionsIdContext = createContext();

export function useQuestionsId() {
  return useContext(QuestionsIdContext);
}

export default function QuestionsIdProvider({ id, children }) {
  return (
    <QuestionsIdContext.Provider value={id}>
      {children}
    </QuestionsIdContext.Provider>
  );
}
