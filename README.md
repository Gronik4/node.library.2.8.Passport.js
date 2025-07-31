# Курс Node.js  
## Блок: DataBases   
### Тема: Аутентификация. Passport.js
Домашнее задание №11  
Автор: Гречишников О.Н. группа: NDJS-ASINHR  

Некотрые правки в код листинга:  
Файл index.js, строка подключения `db: const db = require('./db');` - не работает выдает ошибку:
`TypeError: Cannot read properties of undefined (reading 'findByUsername')`
Пришлось заменить на `const db = require('./db/users');` и соответственно:
`db.users.findByUsername` на `db.findByUsername`
`db.users.verifyPassword` на `db.verifyPassword`

Код:
```js
app.get('/logout',  
    (req, res) => {
      req.logout()
      res.redirect('/')  
})
```
переписать на:
```js
app.get('/Logout',  
    (req, res)=> {  
      req.logout(req.user, err=> {  
        if(err) {return next(err)}  
        res.redirect('/'); });  
})
```
Иначе при переходе по кнопке "Выйти" возникала ошибка : `Ошибка: запрос #logout требует функции обратного вызова`.