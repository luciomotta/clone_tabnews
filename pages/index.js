import { useState } from "react";

function Home() {
  // esse e um componente React que representa a página inicial do aplicativo
  // Estado para gerenciar tags e checklist
  const [tags, setTags] = useState(["Desenvolvimento", "Next.js", "Vercel"]);
  const [newTag, setNewTag] = useState("");
  const [checklist, setChecklist] = useState([
    { id: 1, text: "INICIO", completed: false },
    { id: 2, text: "Vercel em NEXT", completed: false },
  ]);

  // Função para adicionar nova tag
  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  // Função para remover tag
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Função para alternar status do checklist
  const toggleChecklistItem = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // O componente retorna um elemento JSX que renderiza o sistema de tags e checklist
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Bem-vindo ao Clone do TabNews!!!!!</h1>

      {/* Sistema de Tags */}
      <div style={{ marginBottom: "30px" }}>
        <h2>🏷️ Sistema de Tags</h2>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Digite uma nova tag"
            style={{
              padding: "8px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={addTag}
            style={{
              padding: "8px 16px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Adicionar Tag
          </button>
        </div>
        <div>
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                backgroundColor: "#f0f0f0",
                padding: "4px 8px",
                margin: "2px",
                borderRadius: "12px",
                fontSize: "14px",
                cursor: "pointer",
              }}
              onClick={() => removeTag(tag)}
              title="Clique para remover"
            >
              {tag} ×
            </span>
          ))}
        </div>
      </div>

      {/* Checklist estilo Trello */}
      <div>
        <h2>📋 Checklist (Estilo Trello)</h2>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          {checklist.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleChecklistItem(item.id)}
                  style={{ marginRight: "10px", transform: "scale(1.2)" }}
                />
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    color: item.completed ? "#6c757d" : "#000",
                  }}
                >
                  {item.text}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; // exporta o componente Home como o padrão do módulo, permitindo que seja importado em outros arquivos
