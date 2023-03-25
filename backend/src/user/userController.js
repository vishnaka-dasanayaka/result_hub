const userService = require('./userService');

const createUserControllerFn = async (req,res) =>
{
    try 
    {
        console.log(req.body);
        const status = await userService.createUserDBService(req.body);
        console.log(status);
        
        if(status)
        {
            res.send({ "status": true, "message": "User created succuessfuly."});
        }
        else
        {
            res.send({"status": false, "message": "Error in user creating"});
        }
    } 
    catch (error) 
    {
        console.log(error);
    }
}

const loginUserControllerFn = async (req,res) => {
    const result = null;
    try 
    {
        result = await userService.loginUserDBService(req.body);
        if(result.status)
        {
            res.send({"status": true, "message": result.msg});
        }   
        else
        {
            res.send({"status":false, "message":result.msg});
        }
    } 
    catch (error) 
    {
        console.log(error);
        res.send({"status": false, "message": error.msg});
    }
}

module.exports = {createUserControllerFn, loginUserControllerFn};