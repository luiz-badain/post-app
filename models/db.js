const Sequelize = require ('sequelize');
const sequelize =  new Sequelize('epiz_34100733_postapp','epiz_34100733','ctp450wn0bfUJ',{



host: "ctp450wn0bfUJ",
port: "3306",
dialect: 'mysql'

});

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize
}