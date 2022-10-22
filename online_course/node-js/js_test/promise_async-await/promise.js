function sayHello() {
  return new Promise((resolve, reject) => {
    /* const hello = 'Hello Hello';
    resolve(hello); */
    reject(new Error());
  });
}

sayHello()
  .then((resolvedData) => {
    console.log(resolvedData); // 'Hello Hello'
  })
  .catch((error) => {
    console.log(error);
  });
