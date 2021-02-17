const Focus = require("@bazecor-api/focus").default
const Models = require("@bazecor-api/hardware-dygma-raise-ansi");
console.log('Models', Models);
 
let focus = new Focus();
focus.open(Models.Raise_ANSI).then(() => {
  focus.command("help").then((response) => {
    console.log(response);
  });
  // Set the z key to white
  focus.command("led.at 21 255 255 255").then((response) => {
    console.log(response);
  });
});
