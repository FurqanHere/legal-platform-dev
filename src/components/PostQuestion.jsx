import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PostQuestion({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [fileName, setFileName] = useState("");
  const [budget, setBudget] = useState("");

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
          {/* Title */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control postq-input"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <div className="postq-select-wrap">
              <select
                className="form-select postq-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                <option value="family">Family Law</option>
                <option value="criminal">Criminal Defense</option>
                <option value="business">Business Law</option>
                <option value="intellectual">Intellectual Property</option>
                <option value="immigration">Immigration</option>
                <option value="real_estate">Real Estate</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Question */}
          <div className="mb-3">
            <div className="postq-textarea-wrapper">
              <textarea
                className="form-control postq-textarea"
                placeholder="Write your question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
          </div>

          {/* Attach File & Budget */}
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <label className="postq-attach d-flex align-items-center gap-2">
                <i className="bi bi-paperclip" />
                <span>{fileName || "Attach File"}</span>
                <input type="file" className="d-none" onChange={handleFileChange} />
              </label>
            </div>
            <div className="col-md-6">
              <div className="postq-select-wrap">
                <select
                  className="form-select postq-select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="">Select Budget</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-300">$100 - $300</option>
                  <option value="300-500">$300 - $500</option>
                  <option value="500+">$500+</option>
                </select>
              </div>
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
              Post Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
