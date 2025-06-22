function logger(req,res,next)
{
    const timestamp=new Date().toISOString;
    console.log(`time=>${timestamp}-----method=>${req.method}------url=>${req.url}`);

    next();
}


export default logger;