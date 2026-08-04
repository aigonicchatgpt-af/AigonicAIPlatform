from app.database import memory_collection


def get_conversation(session_id: str):

    conversation = memory_collection.find_one(
        {
            "session_id": session_id
        }
    )

    if conversation:
        conversation.pop("_id", None)
        return conversation

    return {
        "session_id": session_id,
        "flow": None,
        "step": None,
        "data": {}
    }


def save_conversation(
    session_id: str,
    flow: str,
    step: str,
    data: dict
):

    memory_collection.update_one(
        {
            "session_id": session_id
        },
        {
            "$set": {
                "flow": flow,
                "step": step,
                "data": data
            }
        },
        upsert=True
    )


def clear_conversation(session_id: str):

    memory_collection.delete_one(
        {
            "session_id": session_id
        }
    )