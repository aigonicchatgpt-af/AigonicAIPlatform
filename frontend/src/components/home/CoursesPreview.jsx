import "./CoursesPreview.css";

function CoursesPreview() {
  return (
    <section className="courses-preview">

      <div className="container">

        <h2>Our AI Courses</h2>

        <p>
          Learn Artificial Intelligence from industry experts.
        </p>

        <div className="course-grid">

          <div className="course-card">
            <h3>Python for AI</h3>
          </div>

          <div className="course-card">
            <h3>Machine Learning</h3>
          </div>

          <div className="course-card">
            <h3>Deep Learning</h3>
          </div>

          <div className="course-card">
            <h3>Agentic AI</h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CoursesPreview;