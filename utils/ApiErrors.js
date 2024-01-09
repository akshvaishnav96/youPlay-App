class ApiErrors extends Error{
    constructor(statusCode,message="failed",errors=[])
   
    {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.data = null;
        this.success = false
    }
}






export {ApiErrors}