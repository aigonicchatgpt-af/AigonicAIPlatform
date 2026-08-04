import chromadb

# ==========================================
# ChromaDB Client
# ==========================================

DB_PATH = "chroma_db"
COLLECTION_NAME = "aigonic"

client = chromadb.PersistentClient(path=DB_PATH)

# ==========================================
# Load Collection
# If collection doesn't exist,
# automatically run ingest.py
# ==========================================

try:
    collection = client.get_collection(COLLECTION_NAME)
    print("✅ ChromaDB collection loaded successfully.")

except Exception:

    print("⚠️ Collection not found.")
    print("🚀 Running knowledge ingestion...")

    # This executes ingest.py
    from app.rag import ingest

    collection = client.get_collection(COLLECTION_NAME)

    print("✅ ChromaDB collection created successfully.")


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
            print("\n⚠️ No documents found.\n")
            return ""

        print("\n" + "=" * 60)
        print("🔍 USER QUESTION")
        print("=" * 60)
        print(query)

        print("\n📚 RETRIEVED DOCUMENTS")
        print("=" * 60)

        context_parts = []

        for i, doc in enumerate(documents):

            source = "Unknown"

            if i < len(metadatas):
                source = metadatas[i].get("source", "Unknown")

            print(f"\nResult {i + 1}")
            print(f"Source : {source}")
            print("-" * 40)
            print(doc)

            context_parts.append(doc)

        print("=" * 60)

        return "\n\n".join(context_parts)

    except Exception as e:

        print("\n❌ Retriever Error")
        print(e)

        return ""