
class CustomError extends Error {
  constructor ( msg ) {
    super ( msg );

    if ( Error.captureStackTrace ) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log('I am Line');
  console.log('i am try block')
  throw new CustomError('I am Custom Error class');
  console.log('i am try block 2')
  console.log('i am try block 3')
} catch (e) {
  console.dir(e);
  console.log('This is a Custom Error Message Catch')
} finally {
  console.log('I am Finally Block');
}
