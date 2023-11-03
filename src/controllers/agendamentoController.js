const controller = {};

controller.listarAgendamentos = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM  agendamentos", (err, agendamentos) => {
      if (err) {
        res.json(err);
      }
      res.render("agendamentos", {
        data: agendamentos,
      });
    });
  });
};

controller.inserirAgendamento = (req, res) => {
  const lastId = getLastId(req);
  req.getConnection((err, conn) => {
    req.body.data = new Date().toISOString().slice(0, 19).replace("T", " ");
    req.body.id = lastId;

    console.log(req.body);
    conn.query(
      "INSERT INTO agendamentos set ? ",
      req.body,
      (err, rows) => {
        if (err) console.log("Erro ao inserir o registro: %s ", err);
        res.redirect("/agendamentos");
      }
    );
  });
};

getLastId = (req) => {
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT ID FROM AGENDAMENTOS ORDER BY ID DESC LIMIT 1",
      req.body,
      (err, lastId) => {
        return lastId;
      }
    );
  });
};

controller.editarAgendamento = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE agendamentos set ? where id = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) console.log("Erro ao atualizar o registro: %s ", err);
        res.redirect("/agendamentos");
      }
    );
  });
};

controller.deleteAgendamento = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(
      "DELETE FROM agendamentos WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) console.log("Erro ao deletar o registro: %s ", err);
        res.redirect("/agendamentos");
      }
    );
  });
};

module.exports = controller;
