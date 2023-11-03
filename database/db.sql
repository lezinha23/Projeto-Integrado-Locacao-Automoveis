create database comercio_automoveis;
use comercio_automoveis;

create table agendamentos(
id int primary key not null auto_increment,
nome_cliente varchar(50),
contato varchar(20),
modelo_veiculo varchar(20),
data datetime,
status varchar(15)
);