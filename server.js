const app = express();

app.use(express.json());

// Store student records
let students = [];

// POST API to add student
app.post('/api/students', (req, res) => {

    const { id, name, email, course, age } = req.body;

    // Validate mandatory fields
    if (!id || !name || !email || !course || age === undefined || age === null) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Create student record
    const newStudent = {
        id,
        name,
        email,
        course,
        age
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});