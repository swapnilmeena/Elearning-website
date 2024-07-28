// Simulated data for course cards
const courses = [
    { title: 'Web Development', instructor: 'John Doe', price: 'Free' },
    { title: 'Python Programming', instructor: 'Jane Smith', price: '$29.99' },
    { title: 'Machine Learning Basics', instructor: 'Alan Johnson', price: '$49.99' },
    { title: 'Introduction to Data Science', instructor: 'Emily Brown', price: '$39.99' },
];

// Function to generate course cards dynamically
function generateCourseCards() {
    const courseContainer = document.querySelector('.course-cards');
    courseContainer.innerHTML = '';
    
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p>Price: ${course.price}</p>
            <a href="#">Enroll Now</a>
        `;
        courseContainer.appendChild(card);
    });
}

// Call the function to generate course cards when the page loads
document.addEventListener('DOMContentLoaded', generateCourseCards);
