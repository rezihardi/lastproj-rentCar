'use strict';

module.exports = function (Commodity) {
  //get commodity by name 
  Commodity.remoteMethod(
    'getCommodityByName', {
      description: 'get commodity by name',
      accepts: [{
        arg: 'nameProduct',
        type: 'string'
      }],
      returns: {
        arg: 'res',
        type: 'object',
        root: true
      },
      http: {
        path: '/getCommodityByName',
        verb: 'get'
      }
    }
  );


  //fungsi getCommodityByName get nameProduct with first name param
  Commodity.getCommodityByName = function (nameProduct, callback) {
    new Promise(function (resolve, reject) {

      //query filter variable
      let filter = {
        where: {
          nameProduct: {
            like: nameProduct
          }
        }
      }

      // querying data
      Commodity.find(filter, function (err, result) {
        if (err) reject(err)
        if (result === null) {
          err = new Error("Nama Tidak Dapat Ditemukan")
          err.statusCode = 404
          reject(err)
        }
        resolve(result)
      })
    }).then(function (res) {
      //callback result
      if (!res) callback(err)
      return callback(null, res)
    }).catch(function (err) {
      callback(err);
    });
  }


  //get commodity by categories
  Commodity.remoteMethod(
    'getCommodityByCategory', {
      description: 'get commodity by category',
      accepts: [{
        arg: 'category',
        type: 'string'
      }],
      returns: {
        arg: 'res',
        type: 'object',
        root: true
      },
      http: {
        path: '/getCommodityByCategory',
        verb: 'get'
      }
    }
  );


  //fungsi getCommodityByName get nameProduct with first name param
  Commodity.getCommodityByCategory = function (category, callback) {
    new Promise(function (resolve, reject) {

      //query filter variable
      let filter = {
        where: {
          category: {
            like: category
          }
        }
      }

      // querying data
      Commodity.find(filter, function (err, result) {
        if (err) reject(err)
        if (result === null) {
          err = new Error("Category Tidak Dapat Ditemukan")
          err.statusCode = 404
          reject(err)
        }
        resolve(result)
      })
    }).then(function (res) {
      //callback result
      if (!res) callback(err)
      return callback(null, res)
    }).catch(function (err) {
      callback(err);
    });
  }
};
