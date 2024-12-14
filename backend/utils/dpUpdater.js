const mongoose = require('mongoose');
const Assignment = require('../models/Assignment');

const assignments = [
    {
        subject: "Maths",
        name: "Linear Equations",
        number: 5,
        description: "Solve the following linear equations and graph their solutions.",
        content: "<p><strong>Task:</strong> Solve the equations:<br>1. 2x + 3y = 6<br>2. x - y = 4<br>Plot the solutions on a graph and find their intersection.</p>",
        lastDateOfSubmission: "2024-12-19T00:00:00.000Z",
        createdBy: "64a23f7e4563b88a9c12d999"
    },
    {
        subject: "Maths",
        name: "Integration Basics",
        number: 6,
        description: "Find the integral of the given functions and explain their applications.",
        content: "<p><strong>Task:</strong> Compute the following integrals:<br>1. ∫(3x^2 + 5x)dx<br>2. ∫(sin(x) + cos(x))dx<br>Discuss their significance in calculating areas and other real-world applications.</p>",
        lastDateOfSubmission: "2024-12-21T00:00:00.000Z",
        createdBy: "64a23f7e4563b88a9c12d999"
    }
    ,

    {
        subject: "English",
        name: "Narrative Writing",
        number: 3,
        description: "Write a short narrative on a memorable day in your life.",
        content: "<p><strong>Instructions:</strong> Use descriptive language to bring your story to life. Focus on emotions, events, and vivid details. Aim for 500-700 words.</p>",
        lastDateOfSubmission: "2024-12-18T00:00:00.000Z",
        createdBy: "64a23f7e4563b88a9c12d678"
    },
    {
        subject: "English",
        name: "Book Review",
        number: 4,
        description: "Review the novel 'To Kill a Mockingbird' by Harper Lee.",
        content: "<p><strong>Task:</strong> Analyze the book's themes, characters, and relevance to society. Discuss how it addresses issues of justice and morality.</p>",
        lastDateOfSubmission: "2024-12-22T00:00:00.000Z",
        createdBy: "64a23f7e4563b88a9c12d678"
    }
    ,

    {
        subject: "Physics",
        name: "Introduction to Gravity",
        number: 1,
        description: "Learn the basics of gravity and its influence on planetary motion.",
        content: "<p><strong>Gravity</strong> is a force that attracts two bodies towards each other. Learn how Newton's law of gravitation explains the motion of planets and how it applies to our daily life. Discuss practical examples.</p>",
        lastDateOfSubmission: "2024-12-20T00:00:00.000Z",
        createdBy: "64a23f7e4563b88a9c12d345"
    },
    {
        subject: "Physics",
        name: "Electromagnetic Waves",
        number: 2,
        description: "Understand the properties and applications of electromagnetic waves.",
        content: "<p><strong>Electromagnetic waves</strong> consist of oscillating electric and magnetic fields. Study their spectrum, applications (radio waves, X-rays, etc.), and how they enable wireless communication.</p>",
        lastDateOfSubmission: "2024-12-25T00:00:00.000Z",
        createdBy: "64a23f7e4563b88a9c12d345"
    }
];

mongoose.connect('mongodb+srv://farazgod1234:70RWzraqdTpbzN9I@cluster0.sbl38.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Database connected!');
        await Assignment.insertMany(assignments);
        console.log('Assignments added!');
        mongoose.disconnect();
    })
    .catch(err => console.error('Error:', err));
