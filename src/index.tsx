import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

 createServer({
   models: {
     trans: Model,
   },

   seeds(server){
     server.db.loadData({
       trans: [
         {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 600,
          createdAt: new Date('2021-02-12 09:00:00'),
         },
         {
          id: 2,
          title: 'Alugel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 09:00:00'),
         },
       ],
     })
   },
   routes(){
     this.namespace = 'api';

     this.get('/trans', () => {
       return this.schema.all('trans')
     })

     this.post('/trans', (schema, request) =>{
       const data = JSON.parse(request.requestBody)

       return schema.create('trans', data)
     })
   }
 })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

