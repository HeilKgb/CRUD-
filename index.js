(async () => {
  const database = require('./database/db');
  const client = require('./model/registerClient');

  try {
      const result = await database.sync();
      console.log(result);

      const resultCreate = await client.create({
        cnpj:"74.176.677/0001-11",
        loan_amount:"78664",
        revenues:"1245",
        company_address:"casa 1 lote 01",
        requester_name:"Vanessa Cristina",
        requester_cpf:"031.623.101-05",
        requester_phone:"999491899",
        requester_email:"joana@gmail.com"
      })
      console.log(resultCreate);
  } catch (error) {
      console.log(error);
  }
})();