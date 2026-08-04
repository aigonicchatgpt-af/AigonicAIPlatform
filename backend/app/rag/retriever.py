import chromadb

# ==========================================
# ChromaDB Client
# ==========================================

client = chromadb.PersistentClient(path="chroma_db")

# Create collection if it doesn't exist
try:
    collection = client.get_collection("aigonic")
    print("✅ ChromaDB collection loaded.")
except Exception:
    print("⚠️ Collection not found. Creating new collection...")
    collection = client.create_collection("aigonic")


# ==========================================
# Search Knowledge Base
# ==========================================

def search(query: str, n_results: int = 5) -> str:
    """
    Search the AIGONIC Knowledge Base
    and return the most relevant context.
    """

    try:

        results = collection.query(
            query_texts=[query],
            n_results=n_results,
        )

        documents = results.get("documents", [[]])[0]
        metadatas = results.get("metadatas", [[]])[0]

        if not documents:
            print("\nNo documents found.\n")
            return ""

        context_parts = []

        for i, doc in enumerate(documents):
            context_parts.append(doc)

        return "\n\n".join(context_parts)

    except Exception as e:
        print("Retriever Error:", e)
        return ""