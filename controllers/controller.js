const currencyFormat = require('../helper/helper');
const {Category, Product, Store} = require('../models')


class Controller {
    static lapakpedia(req, res) {
        res.render('index')
    }

    static home(req, res) {
        Product.findAll({
            include: {
                all: true
            }
        })
        .then((result) => {
            res.render('lapak', {result, currencyFormat})
        }).catch((err) => {
            // res.send(err)
            console.log(err);
        });
    }

    static detail(req, res) {
        const id = req.params.id
        Product.findAll({
            include: Store,
            where: {id} 
        })
        .then((result) => {
            res.render('detail', {result, currencyFormat})
        }).catch((err) => {
            res.send(err)
        });
    }

}


module.exports = Controller