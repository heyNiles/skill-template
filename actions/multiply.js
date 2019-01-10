module.exports = (params, ctx) => {
  const { logger } = ctx;
  const { chalk } = logger;
  let { number_one: numberOne, number_two: numberTwo } = params;

  if (!numberOne || !numberTwo) {
    // Maybe read them from the user with ctx.logger.inquirer instead
    throw new Error('I\'m sorry, I couldn\'t understand the numbers to multiply.');
  }

  numberOne = parseFloat(numberOne.value.trim());
  numberTwo = parseFloat(numberTwo.value.trim());

  logger.log(`That would be ${chalk.blueBright((numberOne * numberTwo).toFixed(2))}, sir.`);
};
