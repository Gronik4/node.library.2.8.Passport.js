const records = [
  {
    id: 1,
    username: 'Jhon',
    password: '123456',
    displayName: 'demo Jhon',
    emails: [{ value: 'Jhon@mail.ru' }],
  },
  {
    id: 2,
    username: 'Martin',
    password: '123456',
    displayName: 'demo Martin',
    emails: [{ value: 'Martin@mail.ru' }],
  },
];

exports.findById = function(id, cb) {
  process.nextTick( function() {
    const idx = id - 1;
    if(records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User '+ id + 'does not exist!!!'))
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick( function() {
    for(let i = 0; i < records.length; i++) {
      const record = records[i];
      if(record.username === username) { return cb(null, record);}
    }
    return cb(null, null);
  })
}

exports.verifyPassword = (user, password)=> {
  return user.password === password;
}