

var mongoose = require('mongoose');
var Dvd = mongoose.model('dvds');

//Get Dvds Listing
exports.index  = function(req,res) {
/*
    Dvd.find(function(err, Dvd) {
        if (err) return res.render('Error occurred');
        res.send(Dvd);
    });
*/
    Dvd.find({},null,{sort: {title: 1}}, function (err, titles) {
        if (err) return res.render('Error occurred');
        res.send(titles);
    });
};

exports.findById = function(req,res) {
    Dvd.findById( req.params.id, function( err, Dvd ) {
            if (err) {
                res.send('Error occurred');
                return console.log(err);
            }
            res.send(Dvd);
    });
};

exports.newDvd = function(req,res) {
    var aDVD = new Dvd(req.body);

    console.log(aDVD.title);

    emp.save(function(err) {
        if (err) {
            res.send('Error occurred');
            return console.log(err);
        }
        res.send(aDVD);
    });
};

exports.update = function(req,res) {
    Dvd.findById( req.params.id, function(err,Dvd) {
        if (!Dvd) {
            res.send('Dvd not found with given id');
        }
        else {
            if (Dvd.__v != req.body.__v) {
                return res.send('Please use the update Dvd details as ' + Dvd);
            }
            Dvd.set(req.body)
            if (Dvd.isModified()) {
                Dvd.increment();
                Dvd.save(function(err) {
                    if (err) {
                        res.send('Error occurred');
                        return console.log(err);
                    }
                    res.send(Dvd);
                });
            }
            else {
                res.send(Dvd);
            }

        }
    });
};

exports.delete = function(req,res) {
    Dvd.findById( req.params.id, function(err,Dvd) {
        if (!Dvd){
            return res.send('Dvd not found with given id');
        }
        Dvd.remove(function(err) {
            if (err) {
                res.send('Error occurred');
                return console.log(err);
            }
            res.send('Deleted')
        });
    });
};