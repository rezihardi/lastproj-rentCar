'use strict';

module.exports = function(Users) {
    //get userdata by username
    Users.remoteMethod(
        'getUsersByUsername', {
          description: 'get usersget by username',
          accepts: [{
            arg: 'username',
            type: 'string'
          }],
          returns: {
            arg: 'res',
            type: 'object',
            root: true
          },
          http: {
            path: '/getUsersByUsername',
            verb: 'get'
          }
        }
      );
    
    
      //fungsi getCommodityByName get nameProduct with first name param
      Users.getUsersByUsername = function (username, callback) {
        new Promise(function (resolve, reject) {
    
          //query filter variable
          let filter = {
            where: {
              username: {
                like: username
              }
            }
          }
    
          // querying data
          Username.find(filter, function (err, result) {
            if (err) reject(err)
            if (result === null) {
              err = new Error("Username Tidak Dapat Ditemukan")
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
