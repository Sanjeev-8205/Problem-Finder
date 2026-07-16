import re
from bs4 import BeautifulSoup


def clean_text(text: str) -> str:
    if not text:
        return ""

    text = BeautifulSoup(text, "html.parser").get_text()

    # Remove fenced code blocks
    text = re.sub(
        r"```.*?```",
        " ",
        text,
        flags=re.DOTALL
    )

    # Remove inline code
    text = re.sub(
        r"`([^`]*)`",
        r"\1",
        text
    )

    # Remove markdown links
    text = re.sub(
        r"\[([^\]]+)\]\([^)]+\)",
        r"\1",
        text
    )

    # Remove raw URLs
    text = re.sub(
        r"https?://\S+",
        " ",
        text
    )

    # Remove markdown headings
    text = re.sub(
        r"^#+",
        "",
        text,
        flags=re.MULTILINE
    )

    return text
