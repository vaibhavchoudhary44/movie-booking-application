const express =require('express');
const  adminRouter = express.Router;

const {addAdmin}= require('../controllers/admin-controller');


adminRouter.get('/signup', addAdmin);
adminRouter.post('/login', addLogin);
adminRouter.get('/', getAdmin);
adminRouter.get('/:id', getAdminById);

module.exports = adminRouter;