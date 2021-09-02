const express = require("express");
const router = express.Router();

// default api res
router.get('/', (req, res) => {
    res.json({
        status: "API is running",
        message: "Selamat datang"
    })
})

// import student controller
const studentController = require('./studentController');

// student Router
router.route('/student')
.get(studentController.index)
.post(studentController.new)

router.route('/student/:student_id')
.get(studentController.view)
.patch(studentController.update)
.put(studentController.update)
.delete(studentController.delete)

// export api routes
module.exports = router;