import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Team Lead</h4>
                <h5>ACM Student Chapter • Mumbai, India</h5>
              </div>
              <h3>2023-24</h3>
            </div>
            <p>
              Led national-level 24-hour hackathon (200+ participants, £4,500 sponsorship). Conducted 10+ workshops on AI, Python, and Cloud and mentored teams to multiple competition wins.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Data Science Intern</h4>
                <h5>63 Moons Technologies • Mumbai, India</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built a legal contract classification model using BERT (92% accuracy) and integrated Pegasus summarization, reducing manual review time by 40%. Developed an agentic AI system with dynamic tool selection and designed an end-to-end RAG pipeline using LangChain and FAISS. Built a robust FastAPI backend with PostgreSQL for 25% faster queries, and created a Streamlit chatbot UI for real-world usage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Growth Strategist</h4>
                <h5>Consulting Project – Petite Staples • Manchester, UK</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed a marketing-led growth strategy for a UK-based fashion brand, focusing on improving conversion, customer retention, and organic reach. Conducted customer and competitor analysis, identified key drop-off points in the purchase journey, and proposed data-driven solutions including micro-influencer partnerships, content strategy optimisation, and e-commerce experience improvements to drive sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
