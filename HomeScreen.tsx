import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#333",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "24px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#1e90ff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div style={styles.content}>
      <h1 style={styles.title}>Home Screen</h1>
      <p style={styles.subtitle}>Click the button to navigate to the next page.</p>
      <button
        style={styles.button}
        onClick={() => navigate("/page")}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#007bff")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#1e90ff")
        }
      >
        Go to Page
      </button>
    </div>
  );
}
