const userModel = require('./userModel');
const key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject){

        const userModelData = new userModel();

        userModelData.firstname = userDetails.firstname;
        userModelData.firstname = userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;
        const encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;
        
        userModelData.save(function resultHandle(error,result){

            if(error){
                reject(false);
            }else{
                resolve(true);
            }
        });

    });
    
}

module.exports.loginUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject)
    {
        userModel.findOne({email: userDetails.email}, function getresult(errorvalue, result)
        {
            if(errorvalue)
            {
                reject({status: false, msg: "Invalis data"});
            }
            else
            {
                if(result != undefined && result != null)
                {
                    const decrypted = encryptor.decrypt(result.password);

                    if(decrypted == userDetails.password)
                    {
                        resolve({status:true, msg: "User validation successful"});
                    }
                    else
                    {
                        reject({status:false, msg:"User validation failed"});       
                    }
                }
                else
                {
                    reject({status:false, msg:"Invalid user details"});
                }

            }

        });

    });
    
}