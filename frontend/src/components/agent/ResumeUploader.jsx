import "./Chat.css";

function ResumeUploader({ onUpload }) {

  function handleFile(e) {

    const file = e.target.files[0];

    if (file) {

      onUpload(file);

    }

  }

  return (

    <div className="resume-upload">

      <div className="resume-card">

        <div className="resume-left">

          <div className="resume-icon">

            📄

          </div>

          <div className="resume-info">

            <h4>Almost there — upload your resume</h4>

            <p>
              PDF, DOC or DOCX
            </p>

          </div>

        </div>

        <label className="resume-upload-btn">

          Upload

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={handleFile}
          />

        </label>

      </div>

    </div>

  );

}

export default ResumeUploader;
