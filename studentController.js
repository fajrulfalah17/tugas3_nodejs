Student = require('./studentModels')

// index action
exports.index = function (req, res) {
    Student.get(function (err, students) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        }

        res.json({
            status: "Success",
            message: "Data siswa berhasil diambil",
            data: students
        })
    })
}

// create student
exports.new = function (req, res) {
    let student = new Student();
    student.name = req.body.name ? req.body.name : student.name
    student.birthday = req.body.birthday
    student.gender = req.body.gender
    student.hobby = req.body.hobby

    // save with status
    student.save().then(data => {
        res.json({
            status: "Success",
            message: "Siswa berhasil ditambah",
            student: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Server Error"
        })
    })
}

// view student
exports.view = function (req, res) {
    Student.findById(req.params.student_id, function (err, student) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        }
        res.json({
            message: "Loading Student...",
            data: student
        })
    })
}

// update student
exports.update = function (req, res) {
    Student.findById(req.params.student_id, function (err, student) {
        if (err) {
            res.json({
                status: "Error",
                message: "Id not found"
            })
        }
        student.name = req.body.name
        student.birthday = req.body.birthday
        student.gender = req.body.gender
        student.hobby = req.body.hobby

        // save with status
        student.save().then(data => {
            res.json({
                status: "Success",
                message: "Siswa berhasil diupdate",
                student: data
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Server Error"
            })
        })
    })
}

// delete student
exports.delete = function (req, res) {
    Student.remove({
            _id: req.params.student_id
        }),
        function (err) {
            if (err)
                res.send(err);
            res.json({
                status: "Success",
                message: "Siswa Berhasil dihapus"
            })
        }
}