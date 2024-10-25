const students = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', grade: '10th' },
    { id: 2, name: 'María García', email: 'maria@example.com', grade: '11th' }
];

const StudentModel = {
    getAll: () => students,

    create: (studentData) => {
        const newStudent = {
            id: students.length + 1,
            ...studentData
        };
        students.push(newStudent);
        return newStudent;
    },

    findById: (id) => students.find(s => s.id === parseInt(id)),

    update: (id, studentData) => {
        const index = students.findIndex(s => s.id === parseInt(id));
        if (index !== -1) {
            students[index] = { ...students[index], ...studentData };
            return students[index];
        }
        return null;
    },

    delete: (id) => {
        const index = students.findIndex(s => s.id === parseInt(id));
        if (index !== -1) {
            return students.splice(index, 1)[0];
        }
        return null;
    }
};

module.exports = StudentModel;