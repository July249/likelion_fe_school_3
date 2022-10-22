function sayHello() {
  return new Promise((resolve, reject) => {
    resolve('hello!!');
  });
}

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test(); // hello!!
