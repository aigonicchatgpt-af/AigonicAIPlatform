import chromadb

# ==========================================
# ChromaDB Client
# ==========================================

client = chromadb.PersistentClient(path="chroma_db")

collection = client.get_collection("aigonic")


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
            print("\n No documents found.\n")
            return ""

        print("\n" + "=" * 60)
        print("🔍 USER QUESTION")
        print("=" * 60)
        print(query)

        print("\n RETRIEVED DOCUMENTS")
        print("=" * 60)

        context_parts = []

        for i, doc in enumerate(documents):

            source = ""

            if i < len(metadatas):
                source = metadatas[i].get("source", "Unknown")

            print(f"\nResult {i+1}")
            print(f"Source : {source}")
            print("-" * 40)
            print(doc)

            context_parts.append(doc)

        print("=" * 60 + "\n")

        context = "\n\n".join(context_parts)

        return context

    except Exception as e:

        print("\n Retriever Error")
        print(e)

        return ""