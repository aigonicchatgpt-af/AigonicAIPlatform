import chromadb

client = chromadb.PersistentClient(path="chroma_db")

collection = client.get_collection("aigonic")

print("Total Chunks:", collection.count())

print(collection.peek())