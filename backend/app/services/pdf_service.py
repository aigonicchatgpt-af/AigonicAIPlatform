import fitz  # PyMuPDF


class PDFService:

    @staticmethod
    def extract_text(pdf_path: str) -> str:
        """
        Extract text from all pages of a PDF.
        """

        text = ""

        try:
            document = fitz.open(pdf_path)

            for page in document:
                text += page.get_text()

            document.close()

        except Exception as e:
            print("PDF Extraction Error:", e)

        return text.strip()