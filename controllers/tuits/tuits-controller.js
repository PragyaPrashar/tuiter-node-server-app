import * as tuitsDao from './tuits-dao.js'


const createTuit = async (req, res) =>{
    const newTuit=req.body;
    console.log("this is newtuit \n");
    console.log(newTuit);
    newTuit.likes=0;
    newTuit.liked=false;
    const insertedTuit=await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits= async(req, res)=>{
    const tuits=await tuitsDao.findTuits();
    console.log("tuits are \n");
    console.log(tuits);
    res.json(tuits);
}
const updateTuit= async (req, res)=>{
    const tuitdIdToUpdate=parseInt(req.params.tid);
    const updates=req.body;
    const status= await tuitsDao.updateTuit(tuitdIdToUpdate,updates);
    res.json(status);

}


const deleteTuit= async (req, res)=>{
    const tuitIdToDelete=req.params.tid;
    const status=await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}

const TuitsController = (app)=>{
    console.log("inside controller");
    app.post('/api/tuits',createTuit);
    app.get('/api/tuits',findTuits);
    app.put('/api/tuits/:tid',updateTuit);
    app.delete('/api/tuits/:tid',deleteTuit);
}
export default TuitsController