const Client = require('../model/registerClient');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
  const client = await Client.findAll()
  res.status(200).json(client);
})

router.get('/:id', async (req, res) => {
  const client = await Client.findByPk(req.params.id)
  res.status(200).json(client);
})

router.post('/create', async (req, res) => {
  const { cnpj, loan_amount,revenues,company_address, requester_name,requester_cpf,requester_phone,requester_email } = req.body;

 await Client.create({ cnpj,loan_amount,revenues,company_address, requester_name,requester_cpf,requester_phone,requester_email });

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  Client.destroy({where: { id: req.params.id }})
  return res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { cnpj, loan_amount,revenues,company_address, requester_name,requester_cpf,requester_phone,requester_email } = req.body;

  await Client.update(
    {  cnpj, loan_amount,revenues,company_address, requester_name,requester_cpf,requester_phone,requester_email},
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;

