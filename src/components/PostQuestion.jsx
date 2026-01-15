import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PostQuestion({ isOpen, onClose }) {
  const [question, setQuestion] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [fileName, setFileName] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) setFileName(f.name);
  };

  return (
    <div className="postq-backdrop">
      <div
        className="postq-modal"
        style={{ fontFamily: "Mukta, system-ui, -apple-system, 'Segoe UI', sans-serif" }}
      >
        <button type="button" className="btn-close postq-close" aria-label="Close" onClick={onClose} />
        <div className="postq-header">
          Post Question
        </div>

        <div className="postq-body">
          <textarea
            className="form-control postq-textarea"
            placeholder="Explain Your Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <div className="row g-3 align-items-center mt-3">
            <div className="col-md-6">
              <div className="postq-select-wrap">
                <select
                  className="form-select postq-select"
                  value={jurisdiction}
                  onChange={(e) => setJurisdiction(e.target.value)}
                >
                  <option value="">Jurisdiction</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="eu">EU</option>
                  <option value="uae">UAE</option>
                  <option value="india">India</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <label className="postq-attach d-flex align-items-center gap-2">
                <i className="bi bi-paperclip" />
                <span>{fileName || "Attach Document"}</span>
                <input type="file" className="d-none" onChange={handleFileChange} />
              </label>
            </div>
          </div>

          <div className="row g-3 mt-4">
            <div className="col-md-8">
              <div className="postq-how">
                <div className="postq-how-title">How it works</div>
                <ul className="postq-how-list">
                  <li>Ask your question and see the answer in Questions & Answers.</li>
                  <li>You will be notified when a lawyer answers.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="postq-fee-card d-flex align-items-center justify-content-between">
                <div>
                  <div className="postq-fee-title">Post Question Fee</div>
                  <div className="postq-fee-sub">1 Question post only</div>
                </div>
                <div className="text-end">
                  <div className="postq-fee-currency">USD</div>
                  <div className="postq-fee-amount">1.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button type="button" className="btn btn-dark rounded-pill w-100 postq-submit">
              Post Your Legal Issues
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
