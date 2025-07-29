import { useState } from "react";
import agents from "../../data/agents";
import AgentCard from "../../components/Agents/AgentCard";
import AgentsSidebar from "../../components/Agents/AgentsSidebar";
import "./AgentsPage.css";

const AgentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAgents = agents.filter(
    (a) =>
      a.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="agents-page">
      <div className="agents-searchbar">
        <input
          type="text"
          placeholder="Search by city or company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="agents-layout">
        <div className="agents-main">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((agent, idx) => (
              <AgentCard agent={agent} key={idx} />
            ))
          ) : (
            <p>No matching agents found.</p>
          )}
        </div>

        <AgentsSidebar />
      </div>
    </section>
  );
};

export default AgentsPage;
