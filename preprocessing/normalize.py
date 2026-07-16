import re
import unicodedata


def normalize_text(text: str) -> str:

    if not text:
        return ""

    # Unicode normalization
    text = unicodedata.normalize("NFKC", text)

    # Tabs → spaces
    text = text.replace("\t", " ")

    # Multiple spaces
    text = re.sub(
        r"[ ]+",
        " ",
        text
    )

    # Multiple newlines
    text = re.sub(
        r"\n\s*\n+",
        "\n\n",
        text
    )

    return text.strip()