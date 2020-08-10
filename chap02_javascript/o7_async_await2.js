const promise = new Promise()

promise.then((result) => {})

async function mainFunc() {
  const result = await promise;
}
mainFunc();

const result = await promise;   // Top-Level await



async function mainFunc2() {
  try {
    const result = await promise;
    return 'john';
  } catch (error) {
    console.error(error);
  }
}
mainFunc2().then((name) => { })
const name = await mainFunc2();
