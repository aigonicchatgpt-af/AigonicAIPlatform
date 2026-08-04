import os
import uuid
import chromadb

from langchain_text_splitters import RecursiveCharacterTextSplitter

# ==========================================
# ChromaDB Client
# ==========================================

DB_PATH = "chroma_db"
COLLECTION_NAME = "aigonic"

client = chromadb.PersistentClient(path=DB_PATH)

# ==========================================
# Reset Collection
# ==========================================

try:
    client.delete_collection(COLLECTION_NAME)
    print("Old collection deleted.")
except Exception:
    print("No previous collection found.")

collection = client.get_or_create_collection(COLLECTION_NAME)

# ==========================================
# Knowledge Folder
# ==========================================

knowledge_folder = "app/knowledge"

if not os.path.exists(knowledge_folder):
    raise FileNotFoundError(
        f"Knowledge folder not found: {knowledge_folder}"
    )

# ==========================================
# Text Splitter
# ==========================================

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
)

total_files = 0
total_chunks = 0

print("\n")
print("=" * 70)
print("🚀 AIGONIC KNOWLEDGE TRAINING STARTED")
print("=" * 70)

# ==========================================
# Read Knowledge Files
# ==========================================

for file_name in sorted(os.listdir(knowledge_folder)):

    if not file_name.endswith(".txt"):
        continue

    total_files += 1

    file_path = os.path.join(knowledge_folder, file_name)

    print(f"\n Loading : {file_name}")

    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        print("Empty file skipped.")
        continue

    chunks = splitter.split_text(text)

    print(f"   Total Chunks : {len(chunks)}")

    # ======================================
    # Store Chunks
    # ======================================

    for index, chunk in enumerate(chunks):

        collection.add(
            ids=[str(uuid.uuid4())],
            documents=[chunk],
            metadatas=[
                {
                    "source": file_name,
                    "chunk": index,
                }
            ],
        )

        total_chunks += 1

print("\n")
print("=" * 70)
print("✅ KNOWLEDGE TRAINING COMPLETED")
print("=" * 70)
print(f" Files Indexed : {total_files}")
print(f" Chunks Created : {total_chunks}")
print(f" Database Path : {DB_PATH}")
print("=" * 70)