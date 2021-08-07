import { useEffect } from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
import {createContext} from 'react'
import { api } from './services/api';

interface TransProps{
    id:number;
    title: string;
    amount: number
    type:string;
    category: string;
    createdAt: string;
}

interface TransInput{
    title: string;
    amount: number
    type:string;
    category: string;
}


interface TransProviderProps{
    children: ReactNode;
}

interface TransContextData{
   trans: TransProps[];
   createTrans: (trans: TransInput)=> Promise<void>;
}

export const TransContext = createContext<TransContextData>(
 {} as TransContextData
);

export function TransProvider({children}: TransProviderProps) {
    const [trans,setTrans] = useState<TransProps[]>([])

  useEffect( () =>{
      api.get('trans')
      .then(response => setTrans(response.data.trans));
      
  }, []);

    async function createTrans(transInput: TransInput){
     const response =   await api.post('/trans', {
       ...transInput,
       createdAt: new Date(),
   })
   const {trans} = response.data
   setTrans([
       
    ...trans,
    trans,
])
   
   
  }

  return(
      <TransContext.Provider value={{trans, createTrans}}>
        {children}
      </TransContext.Provider>
  )
}