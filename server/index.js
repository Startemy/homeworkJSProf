const path = require('path')
const fs = require('fs')
const express = require('express');
const app = express()

const port = 3000;

const catalog_path = path.resolve(__dirname, './data/catalog.json')
const cart_path = path.resolve(__dirname, './data/cart.json')
const static_dir = path.resolve(__dirname, '../dist/')

app.use(express.static(static_dir))
app.use(express.json())

// Получаем каталог товаров
app.get('/api/v1/catalog', (req, res) => {
   fs.readFile(catalog_path, 'utf-8', (err, data) => {
   if(!err) {
      res.send(data);
   } else {
      res.status(500).send(err)
   }
   })
})

//Получаем из корзины
app.get('/api/v1/cart', (req, res) => {
   fs.readFile(cart_path, 'utf-8', (err, data) => {
   if(!err) {
      res.send(data);
   } else {
      res.status(500).send(err)
   }
   })
})

//Добавляем в корзину
app.post('/api/v1/cart', (req, res) => {
   fs.readFile(cart_path, 'utf-8', (err, data) => {
      if(!err) {
         const cart = JSON.parse(data);
         // Сделать проверку натналичие
         cart.push(req.body)
         fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
            res.sendStatus(201)
         })
      } else {
         res.status(500).send(err)
      }
   })
})

// Удалить товар из корзины
app.delete('/api/v1/cart', (req, res) => {
   fs.readFile(cart_path, 'utf-8', (err, data) => {
      if(!err) {
         const delfromcart = JSON.parse(data);
         const findeId = delfromcart.findIndex((item) => +item.id == +req.body.id);
         if(findeId >= 0){
            delfromcart.splice(findeId, 1)
            fs.writeFile(cart_path, JSON.stringify(delfromcart), 'utf-8', (err, data) => {
            res.sendStatus(201)
            })
         }else{
            res.status(404).send('Продукт не найден')
            return;
         }
      } else {
         res.status(500).send(err)
      }
   })
});

// Удаляем из корзмны по ID
app.delete('/api/v1/cart/:id', (req, res) => {
   fs.readFile(cart_path, 'utf-8', (err, data) => {
      if(!err) {
         const delfromcart = JSON.parse(data);
         const findeId = delfromcart.findIndex((item) => +item.id == +req.params.id);
         if(findeId < 0){
            res.status(404).send('Продукт не найден')
            return;
         }
         delfromcart.splice(findeId, 1);
         fs.writeFile(cart_path, JSON.stringify(delfromcart), 'utf-8', (err, data) => {
         res.sendStatus(201)
         })
      } else {
         res.status(500).send(err)
      }
   })
});

//Получение одного товара по id
app.get('/api/v1/catalog/:id', (req, res) => {
   fs.readFile(catalog_path, 'utf-8', (err, data) => {
   if(!err) {
      const catalog = JSON.parse(data);
      const product = catalog.find((item) => item.id == req.params.id)

      if(!product) {
         res.status(404).send('Not Found');
         return;
      }

      res.send(JSON.stringify(product));
   } else {
      res.status(500).send(err)
   }
   })
})


app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
