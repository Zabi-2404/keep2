'use client'

import React, { createContext, useContext, useState } from "react";

type EditLabelContextType = {
  label: string[];
  setLabel: React.Dispatch<React.SetStateAction<string[]>>;
};

export const EditLabelContext = React.createContext<EditLabelContextType | undefined>(undefined)


export const EditLabelProvider =  ({ children }: { children: React.ReactNode }) => {

 const [label, setLabel] = useState<string[]>([]);
 return(

       <EditLabelContext.Provider value={{ label, setLabel }}>
      {children}
    </EditLabelContext.Provider>
 )

};


export const useEditLaber = ()=>{
    const editlabel = useContext(EditLabelContext);
     if (!editlabel) {
    throw new Error("useSidebar must be used within a SideBarProvider");
  }
  return editlabel;
}