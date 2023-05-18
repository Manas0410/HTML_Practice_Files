let controller = new AbortController();

const p = () =>
  new Promise((reply, reject) => {
    setTimeout(() => {
      console.log("Inside STO");
      reply("Success");
    }, 60000);
  });

const promise = () =>
  new Promise((resolve, reject) => {
    p().then(resolve).catch(reject);

    //const id = setInterval(() => console.log("running"), 500);

    controller.signal.addEventListener("abort", () => {
      console.log("rejected");
      //clearInterval(id);
      resolve({ orderConfirmed: false });
    });
  });

promise()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

function cancel() {
  controller.abort();
}

cancel();