(() => {
  // 1.Nan
  // if (NaN * 1 === NaN) {
  //   console.log('Equal');
  // }
  // const result = 1 / 'hello';
  // if (Number.isNaN(result)) {
  //   console.log('Equal to NaN');
  // }
  // 2. Type Coercion
  if (3 > 2 > 1) {
    console.log('Inside');
  }

  console.log(2 - '1');
  console.log(2 + '1');

  console.log(true + true);

  // 3. Interpreter & Compiler
  function getPerson() {
    return {
      name: 'Sutthinart',
    };
  }
  console.log(getPerson());

  // 4. Checking Object Type
  const person = null;
  if (typeof person === 'object' && person !== null) {
    console.log('Yes, object');
  }
})();
