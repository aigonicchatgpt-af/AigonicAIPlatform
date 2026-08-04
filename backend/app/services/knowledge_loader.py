from pathlib import Path

KNOWLEDGE_PATH = Path("app/knowledge")


def load_file(filename):
    file_path = KNOWLEDGE_PATH / filename

    if file_path.exists():
        return file_path.read_text(encoding="utf-8")

    return ""


def load_knowledge():

    system_prompt = load_file("System_prompt.txt")
    company = load_file("company.txt")
    services = load_file("services.txt")
    careers = load_file("careers.txt")
    contact = load_file("contact.txt")
    faq = load_file("faq.txt")

    return f"""
{system_prompt}

================ COMPANY ================
{company}

================ SERVICES ================
{services}

================ CAREERS ================
{careers}

================ CONTACT ================
{contact}

================ FAQ ================
{faq}
"""