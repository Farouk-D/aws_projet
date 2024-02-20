const router=require('express').Router();
const authController=require('../controllers/auth.controller');
const userController=require('../controllers/user.controller');




// Routes pour l'authentification des utilisateurs
router.post('/add',authController.signUp);

//autres routes pour utilisateurs

router.get('/all',userController.getUsers)
router.get('/:id',userController.user)
module.exports=router;