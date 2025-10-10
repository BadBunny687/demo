import React from "react";

const styles = {
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center" as const,
  },
  successText: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#28a745",
  },
};

export default function Page() {
  return (
    <div style={styles.content}>
      <p style={styles.successText}>Great, you made it!</p>
    </div>
  );
}
