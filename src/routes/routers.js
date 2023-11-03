const router = require("express").Router();

const agendamentoController = require("../controllers/agendamentoController");

// router.get("/", agendamentoController.listarAgendamentos);
router.get("/agendamentos", agendamentoController.listarAgendamentos);
router.get("/update/:id", agendamentoController.editarAgendamento);
router.get("/delete/:id", agendamentoController.deleteAgendamento);
router.post("/addAgendamento", agendamentoController.inserirAgendamento);

router.get("/", (req, res) => {
  res.render("./index");
});

router.get("/agendamentos", (req, res) => {
  res.render("./agendamentos");
});


module.exports = router;
